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
		"content": `<style>.cf-dqybgk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 17h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cjsg0ab2y {
  d: path("M2 20h20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ljyilab6d {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 17V7l4 -4 4 4v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mjsa21byd {
  d: path("M8 17V7l4 -4 4 4v10");
}

.ok9ioqb8x {
  d: path("M4 17h16");
}

.zl6g0h25d {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 20h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ljyilab6d"/><path class="cf-dqybgk"/><path class="zl6g0h25d"/><path class="mjsa21byd"/><path class="ok9ioqb8x"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:landmark-duotone-thin",
	});
}

export default Component;
