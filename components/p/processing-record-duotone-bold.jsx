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
		"content": `<style>.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.hl070ta8t {
  d: path("M11 14h4");
}

.iw6xucujz {
  fill: currentColor;
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m7m8cxbhm {
  d: path("M11 11h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xgrnk0bjr {
  d: path("M9 10v7");
}
</style><g class="s0phu2bbs"><path class="iw6xucujz"/><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="xgrnk0bjr"/><path class="m7m8cxbhm"/><path class="hl070ta8t"/></g>`,
		"fallback": "iconmind:processing-record-duotone-bold",
	});
}

export default Component;
