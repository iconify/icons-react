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
		"content": `<style>.fmlaifbpn {
  d: path("M12 16v4");
}

.hya5w9myb {
  d: path("M9 13c-2 -2 -1 -5 1 -7h4c2 2 3 5 1 7Z");
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="s0phu2bbs"><path class="hya5w9myb"/><path class="ys-dg812g"/><path class="fmlaifbpn"/><path class="qdn88l2uv"/></g>`,
		"fallback": "iconmind:pottery-wheel-outline-bold",
	});
}

export default Component;
