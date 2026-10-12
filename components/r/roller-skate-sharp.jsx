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
		"content": `<style>.dwnhvlaym {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 19h.01");
}

.fb03m042k {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.5 19h.01");
}

.jogjldxai {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 4.25v-1h6V8l4.5 1.5l2.22.879l.28 2.371v1.5h-13v-1Zm2.25 2h2");
}

.rzqvhrb3a {
  cx: 8px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.z1jlxibqc {
  cx: 16.5px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><path class="jogjldxai"/><circle class="rzqvhrb3a"/><path class="dwnhvlaym"/><circle class="z1jlxibqc"/><path class="fb03m042k"/></g>`,
		"fallback": "iconoven:roller-skate-sharp",
	});
}

export default Component;
