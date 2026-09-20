import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zwabcdchs {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm1-1h10L10 7H5zm8-8h6V7h-6zm-9 9V6z");
}
</style><path class="zwabcdchs"/>`,
		"fallback": "material-symbols:payment-card-outline-sharp",
	});
}

export default Component;
