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
		"content": `<style>.djjiqhvra {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v10a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r06ch5q2n {
  d: path("m11.805 7.967l1.206.768a1.5 1.5 0 0 1 0 2.53l-1.206.768A1.5 1.5 0 0 1 9.5 10.767V9.233a1.5 1.5 0 0 1 2.305-1.266M6 16.5h12");
}
</style><g class="hntgybcog"><path class="djjiqhvra"/><path class="r06ch5q2n"/></g>`,
		"fallback": "uix:media-player-file",
	});
}

export default Component;
