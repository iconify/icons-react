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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hu4-bskxo {
  d: path("M12 2.5a9.5 9.5 0 1 1-8.227 4.75");
}

.i35x5ab3x {
  d: path("M7 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1-6.5h.01M9 16h.01");
}
</style><g class="hntgybcog"><path class="hu4-bskxo"/><path class="i35x5ab3x"/></g>`,
		"fallback": "uix:particulate-matter",
	});
}

export default Component;
