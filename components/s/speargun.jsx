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
		"content": `<style>.al-wpmyjt {
  d: path("M8.252 11.5H8.5a1.252 1.252 0 0 1 1.232 1.476l-.508 2.792A1.5 1.5 0 0 1 7.748 17H7.5a1.252 1.252 0 0 1-1.232-1.476l.508-2.792A1.5 1.5 0 0 1 8.252 11.5M2.5 10H5m13 0h3.5m-2-2l2 2l-2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hy1qyccsl {
  d: path("M6.5 8.5h10A1.5 1.5 0 0 1 18 10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 10a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="hy1qyccsl"/><path class="al-wpmyjt"/></g>`,
		"fallback": "uix:speargun",
	});
}

export default Component;
