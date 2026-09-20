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
		"content": `<style>.d-uyzac3l {
  d: path("M10.5 14a1.5 1.5 0 0 1 3 0");
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x-7dg674s {
  d: path("M9 14h6v3H9Z");
}
</style><g class="s0phu2bbs"><path class="k6fi9qmtq"/><path class="ozi-k-boi"/><path class="x-7dg674s"/><path class="d-uyzac3l"/></g>`,
		"fallback": "iconmind:secure-checkout-outline-bold",
	});
}

export default Component;
