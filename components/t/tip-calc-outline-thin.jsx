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
		"content": `<style>.eahy924ne {
  d: path("M6 9.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lxoo1ac9h {
  d: path("M10 14.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ogtwkzbca {
  d: path("M22 9.5h-7v5h7");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.zjleuacmi {
  d: path("m6.5 14.5 5 -5");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="ogtwkzbca"/><path class="eahy924ne"/><path class="zjleuacmi"/><path class="lxoo1ac9h"/></g>`,
		"fallback": "iconmind:tip-calc-outline-thin",
	});
}

export default Component;
