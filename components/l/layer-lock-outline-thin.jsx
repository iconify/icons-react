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
		"content": `<style>.eywlytabr {
  d: path("M4 3.5A1.5 1.5 0 0 1 5.5 2h13A1.5 1.5 0 0 1 20 3.5 1.5 1.5 0 0 1 18.5 5h-13A1.5 1.5 0 0 1 4 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgql0jyyx {
  d: path("M8.5 15a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.ypui4ib8n {
  d: path("M9.5 13a2.5 2.5 0 0 1 5 0");
}
</style><g class="hntgybcog"><path class="eywlytabr"/><path class="jgql0jyyx"/><path class="ypui4ib8n"/></g>`,
		"fallback": "iconmind:layer-lock-outline-thin",
	});
}

export default Component;
