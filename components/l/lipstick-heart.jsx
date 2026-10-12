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
		"content": `<style>.h2dc94rob {
  d: path("M7.75 16.5h8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hua_5rboh {
  d: path("M9.5 13.5V6.9a1 1 0 0 1 .5-.87l3.75-2.25a.5.5 0 0 1 .75.43v9.29Z");
}

.p9j37_b2x {
  width: 8.5px;
  height: 7.75px;
  x: 7.75px;
  y: 13.5px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="hua_5rboh"/><rect class="p9j37_b2x"/><path class="h2dc94rob"/></g>`,
		"fallback": "iconoven:lipstick-heart",
	});
}

export default Component;
