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
		"content": `<style>.f-3vcsp9b {
  d: path("M2.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hp-9o5-ku {
  d: path("m17.5 3l3 3l-3 3");
}

.l2od_-b7c {
  d: path("M4.5 16.5c0-6 5.5-10.5 16-10.5");
}
</style><g class="hntgybcog"><path class="f-3vcsp9b"/><path class="l2od_-b7c"/><path class="hp-9o5-ku"/></g>`,
		"fallback": "uix:velocity",
	});
}

export default Component;
