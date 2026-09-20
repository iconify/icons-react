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
		"content": `<style>.uk_vugb3t {
  fill: currentColor;
  d: path("M7 21v-4h10v4zm-1-5l-1-5.05V3h12v4h2v3.95L18 16zm1.65-2h8.7l.65-3.4V10h-2V5H7v5.6zM8 10h6V7H8zm4-.5");
}
</style><path class="uk_vugb3t"/>`,
		"fallback": "material-symbols:sports-mma-outline-sharp",
	});
}

export default Component;
