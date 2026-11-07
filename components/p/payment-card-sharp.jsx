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
		"content": `<style>.sbbue8b2n {
  fill: currentColor;
  d: path("M2 20V4h20v16zm3-3h10L10 7H5zm8-8h6V7h-6z");
}
</style><path class="sbbue8b2n"/>`,
		"fallback": "material-symbols:payment-card-sharp",
	});
}

export default Component;
