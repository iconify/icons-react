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
		"content": `<style>.hpa2y2bip {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2C2.4477 2 2 2.4477 2 3L2 21C2 21.5523 2.4477 22 3 22L21 22C21.5523 22 22 21.5523 22 21L22 3C22 2.4477 21.5523 2 21 2L3 2ZM16 9L16 16L14 16L14 11.4141L9.4141 15.9998L8.0001 14.5858L12.5859 10L8 10L8 8L15 8C15.5523 8 16 8.4477 16 9Z");
}
</style><path clip-rule="evenodd" class="hpa2y2bip"/>`,
		"fallback": "keyline-icons:square-arrow-up-right-sharp-fill",
	});
}

export default Component;
