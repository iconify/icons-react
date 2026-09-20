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
		"content": `<style>.fau57ihtk {
  d: path("M15 10a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.meyucufno {
  d: path("m16 12.5 -2 2");
}

.rmac01ujx {
  d: path("M3 6h5l4 4 -4 4H3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rmac01ujx"/><path class="fau57ihtk"/><path class="meyucufno"/></g>`,
		"fallback": "iconmind:tag-search-outline-bold",
	});
}

export default Component;
