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
		"content": `<style>.c55ag9btm {
  cx: 9px;
  cy: 18px;
  r: 4px;
}

.dzws6zn0x {
  d: path("M13 12V7V2");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.roh-o2f0v {
  d: path("M19 8C15.6863 8 13 5.31371 13 2");
}
</style><g class="ipq1z-bjh"><path class="dzws6zn0x"/><circle class="c55ag9btm"/><path class="roh-o2f0v"/></g>`,
		"fallback": "solar:music-note-2-broken",
	});
}

export default Component;
