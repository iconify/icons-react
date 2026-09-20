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
		"content": `<style>.b1gbz7b1l {
  fill: currentColor;
  d: path("m8.5 12 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f-t_rcb_j {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.go6ln---p {
  d: path("m15.5 12 2 2 -2 2 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.xj-uct45i {
  fill: currentColor;
  d: path("m15.5 12 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yl27oobxu {
  d: path("m8.5 12 2 2 -2 2 -2 -2Z");
}
</style><g class="hntgybcog"><path class="f-t_rcb_j"/><path class="b1gbz7b1l"/><path class="xj-uct45i"/><path class="k6fi9qmtq"/><path class="ozi-k-boi"/><path class="yl27oobxu"/><path class="go6ln---p"/></g>`,
		"fallback": "iconmind:loyalty-points-duotone-thin",
	});
}

export default Component;
