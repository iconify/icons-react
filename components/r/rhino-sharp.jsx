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
		"content": `<style>.rq8879bxe {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 11h.01");
}

.tjruuk_kg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 12.5l-1-4.25l-.327-1.964L4.35 7.8l1.9 3.7Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.v9g1i1bcm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12.75h1.417L6 11.5L7.75 9l.5-2L9.5 8.5H15c3.5 0 6.25 2.25 6.25 5.75v2.5H20l-.5 3.5h-2l-.5-3.5h-5.5l-.5 3.5H9l-.5-3.75H5.688L3.5 14.75l-.5-.5l-1.5-1.5h2Z");
}
</style><g class="ux2u0rbkq"><path class="v9g1i1bcm"/><path class="tjruuk_kg"/><path class="rq8879bxe"/></g>`,
		"fallback": "iconoven:rhino-sharp",
	});
}

export default Component;
