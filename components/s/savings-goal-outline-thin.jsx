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
		"content": `<style>.f4pe6ubam {
  d: path("M9 12.5v6");
}

.g_k4bub3x {
  d: path("M6 9h12v10a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3Z");
}

.guw4_4ovg {
  d: path("M8 9V4h8v5");
}

.gwf3f1bpc {
  d: path("M9 13.5h5v4H9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g_k4bub3x"/><path class="guw4_4ovg"/><path class="f4pe6ubam"/><path class="gwf3f1bpc"/></g>`,
		"fallback": "iconmind:savings-goal-outline-thin",
	});
}

export default Component;
