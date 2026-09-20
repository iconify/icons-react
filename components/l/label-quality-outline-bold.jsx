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
		"content": `<style>.hgb-t7boy {
  d: path("M6 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}

.zf4ugsben {
  d: path("m12 11 3 3 -3 3 -3 -3Z");
}
</style><g class="s0phu2bbs"><path class="w3hyiobto"/><path class="hgb-t7boy"/><path class="zf4ugsben"/></g>`,
		"fallback": "iconmind:label-quality-outline-bold",
	});
}

export default Component;
