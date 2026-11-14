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
		"content": `<style>.ftsl330xz {
  d: path("M5 2.5v19M5 3c4-1.25 7 3 14.5.5V13C12 15.5 9 11.25 5 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgh193bfs {
  d: path("M10.25 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="ftsl330xz"/><path class="zgh193bfs"/></g>`,
		"fallback": "uix:team-flag",
	});
}

export default Component;
