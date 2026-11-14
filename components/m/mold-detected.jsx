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
		"content": `<style>.h3itto1-w {
  fill: currentColor;
  d: path("M4.5 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.25-.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M4.5 12A1.25 1.25 0 1 0 7 12a1.25 1.25 0 1 0-2.5 0m4.75-1.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.25-3a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s4k2st-bq {
  d: path("m19.324 16.482l1.5 2.812A1.5 1.5 0 0 1 19.5 21.5h-3a1.5 1.5 0 0 1-1.324-2.206l1.5-2.812a1.5 1.5 0 0 1 2.648 0M18 17.25v1M18 20h.01");
}

.vtt342xpx {
  d: path("M2.5 21.5v-19h19");
}
</style><g class="hntgybcog"><path class="vtt342xpx"/><path class="h3itto1-w"/><path class="s4k2st-bq"/></g>`,
		"fallback": "uix:mold-detected",
	});
}

export default Component;
