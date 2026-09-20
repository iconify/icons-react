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
		"content": `<style>.c58ve3zov {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 10h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ck7sgubpk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.oiqg4cbka {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 17h4l2.5 -2.5L12 17l2.5 -2.5L17 17h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vwjk1ok-c {
  d: path("M3 17h4l2.5 -2.5L12 17l2.5 -2.5L17 17h4");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="hntgybcog"><path class="ck7sgubpk"/><path class="c58ve3zov"/><path class="oiqg4cbka"/><path class="k6nj2fbya"/><path class="x50q_4bdr"/><path class="vwjk1ok-c"/></g>`,
		"fallback": "iconmind:transcribe-live-duotone-thin",
	});
}

export default Component;
