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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nh-pnabbm {
  d: path("M15 6v3h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.w4mlg7f2w {
  d: path("m20 4 -5 5");
}
</style><g class="s0phu2bbs"><path class="ugdbidcqi"/><path class="bo51iypxr"/><path class="w4mlg7f2w"/><path class="nh-pnabbm"/></g>`,
		"fallback": "iconmind:objective-outline-bold",
	});
}

export default Component;
