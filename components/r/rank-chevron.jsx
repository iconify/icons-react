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
		"content": `<style>.c0d6mccdx {
  d: path("m5 20.5l7-7l7 7");
}

.ddos-4grn {
  d: path("m5 15.5l7-7l7 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w59o4cb6g {
  d: path("m5 10.5l7-7l7 7");
}
</style><g class="hntgybcog"><path class="w59o4cb6g"/><path class="ddos-4grn"/><path class="c0d6mccdx"/></g>`,
		"fallback": "uix:rank-chevron",
	});
}

export default Component;
