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
		"content": `<style>.kvm_1hbrh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l6.6 2.45a1 1 0 0 1 .65.94v5.26c0 4.4-2.9 7.6-7.25 9.85C7.65 19 4.75 15.8 4.75 11.4V6.14a1 1 0 0 1 .65-.94Z");
}

.nw6_dqolj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.3 9.2h.01M9.7 13.8h.01");
}

.ush64bctp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.71 7.79zq-1.59-1.59-3.18 0l-4.24 4.24q-1.59 1.59 0 3.18t3.18 0l4.24-4.24q1.59-1.59 0-3.18");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="kvm_1hbrh"/><path class="ush64bctp"/><path class="nw6_dqolj"/></g>`,
		"fallback": "iconoven:patch-bandage",
	});
}

export default Component;
