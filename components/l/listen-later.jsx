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
		"content": `<style>.ebbevh_oa {
  d: path("M12 11v3.5h2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.myezvtihj {
  d: path("M5.5 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.u0nxoabvl {
  d: path("M4 11.5a8 8 0 0 1 16 0m-16 0zA1.5 1.5 0 0 1 5.5 13v3A1.5 1.5 0 0 1 4 17.5A1.5 1.5 0 0 1 2.5 16v-3A1.5 1.5 0 0 1 4 11.5m16 0za1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="u0nxoabvl"/><path class="myezvtihj"/><path class="ebbevh_oa"/></g>`,
		"fallback": "uix:listen-later",
	});
}

export default Component;
