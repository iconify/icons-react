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
		"content": `<style>.b-_pqoidx {
  fill: currentColor;
  d: path("M2 8a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.b1osgvbqx {
  d: path("M2 8a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.eyvjmxk-i {
  d: path("M9 10h4");
}

.fj_yfcb-v {
  fill: currentColor;
  d: path("M13 8a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qh6hkcycj {
  d: path("m15 16 2 2 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ulh849bsj {
  d: path("M13 8a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="b-_pqoidx"/><path class="fj_yfcb-v"/><path class="b1osgvbqx"/><path class="eyvjmxk-i"/><path class="ulh849bsj"/><path class="qh6hkcycj"/></g>`,
		"fallback": "iconmind:test-e2e-duotone-bold",
	});
}

export default Component;
