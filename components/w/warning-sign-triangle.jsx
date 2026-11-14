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
		"content": `<style>.o8eav9b5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.033 8.268l3.446 5.986a3.5 3.5 0 0 1-3.033 5.246H8.554a3.5 3.5 0 0 1-3.033-5.246l3.446-5.986a3.5 3.5 0 0 1 6.066 0M12 9v4m0 3.5h.01");
}
</style><path class="o8eav9b5f"/>`,
		"fallback": "uix:warning-sign-triangle",
	});
}

export default Component;
