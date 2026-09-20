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

.nzatmusii {
  d: path("M6 9h6");
}

.odnjrjj4e {
  d: path("M6.5 14.5 9 12l2.5 2.5");
}

.ogtwkzbca {
  d: path("M22 9.5h-7v5h7");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="ogtwkzbca"/><path class="nzatmusii"/><path class="odnjrjj4e"/></g>`,
		"fallback": "iconmind:spend-limit-outline-thin",
	});
}

export default Component;
