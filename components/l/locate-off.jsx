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
		"content": `<style>.i15oribxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.2426 16.2426C15.1569 17.3284 13.6569 18 12 18C8.6863 18 6 15.3137 6 12C6 10.3431 6.6716 8.8431 7.7574 7.7574M12 22L12 18M2 12L6 12M11.666 6.0091C11.7766 6.0031 11.8879 6 12 6C15.3137 6 18 8.6863 18 12C18 12.1121 17.9969 12.2234 17.9909 12.334M12 2L12 6M22 12L18 12M2 2L22 22");
}
</style><path class="i15oribxt"/>`,
		"fallback": "keyline-icons:locate-off",
	});
}

export default Component;
