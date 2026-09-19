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
		"content": `<style>.t7ual1e1t {
  fill: currentColor;
  d: path("M5 7h5.5v12h3V7H19V4H5z");
}
</style><path class="t7ual1e1t"/>`,
		"fallback": "ic:twotone-title",
	});
}

export default Component;
