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

.l3zbf3bov {
  d: path("M8.75 7.5h-1.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.5Z");
}

.sfz8h1bgm {
  width: 6px;
  height: 16.5px;
  x: 8.75px;
  y: 3.75px;
  rx: 2.5px;
}

.yw3aekblp {
  d: path("M11.75 3.75v16.5M17.25 7q2.5 5 0 10");
}
</style><g class="hntgybcog"><path class="l3zbf3bov"/><rect class="sfz8h1bgm"/><path class="yw3aekblp"/></g>`,
		"fallback": "iconoven:prime-lens",
	});
}

export default Component;
