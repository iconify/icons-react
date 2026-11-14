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
		"content": `<style>.cvys55ifq {
  d: path("M9 13.5a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i934irg1r {
  d: path("M2.5 21.5c0-14.5 4.5-19 19-19c0 14.5-4.5 19-19 19");
}

.rz5yhb2kz {
  d: path("M10 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m.5-1.25L8.75 6.5m3.75 1.25l1.75-1.25M9.5 12l-2-1.25M9 13.5H6.75m3 2l-2 1.5m5.75-5l2-1.25M14 13.5h2.25m-3 2l2 1.5");
}
</style><g class="hntgybcog"><path class="i934irg1r"/><path class="cvys55ifq"/><path class="rz5yhb2kz"/></g>`,
		"fallback": "uix:pest-plant",
	});
}

export default Component;
