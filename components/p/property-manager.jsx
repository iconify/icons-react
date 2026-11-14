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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipv80kduk {
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M4 21c0-4 3.5-6.5 8-6.5q.337 0 .669.019m3.831.731h3A1.75 1.75 0 0 1 21.25 17v3a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 14.75 20v-3a1.75 1.75 0 0 1 1.75-1.75");
}

.j32fk3iya {
  d: path("M17.5 14.25h1a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-.75 4.5h2.5");
}
</style><g class="hntgybcog"><path class="ipv80kduk"/><path class="j32fk3iya"/></g>`,
		"fallback": "uix:property-manager",
	});
}

export default Component;
