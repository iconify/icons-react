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
		"content": `<style>.g3lrzsbos {
  d: path("M3 5h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m_5u0ccez {
  d: path("M15 20h7");
}

.q83h1dbic {
  d: path("M11 15h7");
}

.uepsd3bvn {
  d: path("M7 10h7");
}
</style><g class="hntgybcog"><path class="g3lrzsbos"/><path class="uepsd3bvn"/><path class="q83h1dbic"/><path class="m_5u0ccez"/></g>`,
		"fallback": "iconmind:reasoning-trace-outline-thin",
	});
}

export default Component;
