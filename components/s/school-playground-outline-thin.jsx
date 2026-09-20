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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.ed-cudrmv {
  d: path("M20 6v14");
}

.gzw9grb_d {
  d: path("M15 6v9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i7797vbcv {
  d: path("M9 6v9");
}

.k4qo1xe9v {
  d: path("M4 6h16");
}

.rjl8fe1sw {
  d: path("M4 6v14");
}
</style><g class="hntgybcog"><path class="k4qo1xe9v"/><path class="rjl8fe1sw"/><path class="ed-cudrmv"/><path class="i7797vbcv"/><path class="gzw9grb_d"/><path class="c4khiwgvb"/></g>`,
		"fallback": "iconmind:school-playground-outline-thin",
	});
}

export default Component;
