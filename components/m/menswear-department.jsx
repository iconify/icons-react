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
		"content": `<style>.irf0p6gra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.699 3h.602a1.5 1.5 0 0 1 1.488 1.686l-.125 1A1.5 1.5 0 0 1 12.176 7h-.352a1.5 1.5 0 0 1-1.488-1.314l-.125-1A1.5 1.5 0 0 1 11.699 3m.11 4h.382a1.5 1.5 0 0 1 1.486 1.297l1.222 8.966a1.5 1.5 0 0 1-.425 1.263l-1.413 1.413a1.5 1.5 0 0 1-2.122 0l-1.413-1.413a1.5 1.5 0 0 1-.425-1.263l1.222-8.966A1.5 1.5 0 0 1 11.809 7");
}
</style><path class="irf0p6gra"/>`,
		"fallback": "uix:menswear-department",
	});
}

export default Component;
