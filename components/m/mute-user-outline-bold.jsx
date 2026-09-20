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
		"content": `<style>.f69zonn4h {
  d: path("M4 17a4 4 0 0 1 8 0");
}

.m15ww7bpj {
  d: path("M15 12c2.5 0 4 1 4 3s-1.5 3 -4 3Z");
}

.mx7ei53xw {
  d: path("m14 19 7 -7");
}

.q8-0ejn0y {
  d: path("M5 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="q8-0ejn0y"/><path class="f69zonn4h"/><path class="m15ww7bpj"/><path class="mx7ei53xw"/></g>`,
		"fallback": "iconmind:mute-user-outline-bold",
	});
}

export default Component;
