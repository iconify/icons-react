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
		"content": `<style>.aw4u1lbod {
  fill: currentColor;
  d: path("M2 12a3 3 0 0 1 2 -5.5 4 4 0 0 1 7.5 -1A4.5 4.5 0 0 1 15 12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jph91n2ni {
  d: path("M7 21a3.5 3.5 0 0 1 2 -6 4.5 4.5 0 0 1 8 -1 4.5 4.5 0 0 1 3 7Z");
}

.kxp08h6am {
  d: path("M2 12a3 3 0 0 1 2 -5.5 4 4 0 0 1 7.5 -1A4.5 4.5 0 0 1 15 12Z");
}

.x99a_50ey {
  fill: currentColor;
  d: path("M7 21a3.5 3.5 0 0 1 2 -6 4.5 4.5 0 0 1 8 -1 4.5 4.5 0 0 1 3 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="aw4u1lbod"/><path class="x99a_50ey"/><path class="kxp08h6am"/><path class="jph91n2ni"/></g>`,
		"fallback": "iconmind:overcast-duotone-thin",
	});
}

export default Component;
