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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.f3r6jjb4a {
  d: path("M20 3v18");
}

.g7ft4qb2t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_47v4dkd {
  d: path("m8 12 3 3 6 -6");
}

.qawbfyn9j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m8 12 3 3 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vpuel0dtu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vpuel0dtu"/><path class="g7ft4qb2t"/><path class="qawbfyn9j"/><path class="crv4i00bu"/><path class="f3r6jjb4a"/><path class="q_47v4dkd"/></g>`,
		"fallback": "iconmind:quality-gate-duotone-thin",
	});
}

export default Component;
