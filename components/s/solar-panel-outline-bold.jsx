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
		"content": `<style>.m0f5ny81l {
  d: path("M5 20h8");
}

.s09hy0b0y {
  d: path("M7 11h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s1r4963pp {
  d: path("m4 14 6 -6h10l-6 6Z");
}

.wcigoab1j {
  d: path("M9 14v6");
}
</style><g class="s0phu2bbs"><path class="s1r4963pp"/><path class="s09hy0b0y"/><path class="wcigoab1j"/><path class="m0f5ny81l"/></g>`,
		"fallback": "iconmind:solar-panel-outline-bold",
	});
}

export default Component;
