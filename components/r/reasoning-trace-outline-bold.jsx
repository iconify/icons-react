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

.m_5u0ccez {
  d: path("M15 20h7");
}

.q83h1dbic {
  d: path("M11 15h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uepsd3bvn {
  d: path("M7 10h7");
}
</style><g class="s0phu2bbs"><path class="g3lrzsbos"/><path class="uepsd3bvn"/><path class="q83h1dbic"/><path class="m_5u0ccez"/></g>`,
		"fallback": "iconmind:reasoning-trace-outline-bold",
	});
}

export default Component;
