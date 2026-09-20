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
		"content": `<style>.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.d6swx-tss {
  d: path("M14 12.5v6");
}

.g7cpaab_q {
  d: path("m6 9 3 -3 3 3 2 -2 2 2");
}

.mv2puevlj {
  d: path("M10 12.5v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="d5czi6rdr"/><path class="g7cpaab_q"/><path class="mv2puevlj"/><path class="d6swx-tss"/></g>`,
		"fallback": "iconmind:listing-paused-outline-bold",
	});
}

export default Component;
