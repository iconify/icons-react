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
		"content": `<style>.rxvnnxqwu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 18H23M1 6H5.999M5.999 6H11M5.999 6L5.997 11M5.999 6L6 1M4.701 22.43L19.299 1.57");
}
</style><path class="rxvnnxqwu"/>`,
		"fallback": "keyline-icons:plus-forward-slash-minus-sharp",
	});
}

export default Component;
