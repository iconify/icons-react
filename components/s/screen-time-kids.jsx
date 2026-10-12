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
		"content": `<style>.bcvszibcg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.75 13.25V15L19 16");
}

.g3h0tdpmx {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9.5h.01M9 9.5h.01");
}

.lqa0robbd {
  cx: 17.75px;
  cy: 15px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pd7oi69yu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12.75a2 2 0 0 0 4 0");
}

.vlvgqkbia {
  width: 9.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="vlvgqkbia"/><path class="g3h0tdpmx"/><path class="pd7oi69yu"/><circle class="lqa0robbd"/><path class="bcvszibcg"/></g>`,
		"fallback": "iconoven:screen-time-kids",
	});
}

export default Component;
