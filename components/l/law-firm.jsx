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
		"content": `<style>.dlwvvub8w {
  cx: 12px;
  cy: 7.75px;
  r: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ir4zrrbiy {
  d: path("m3.55 9.9l7.65-5.8q.8-.6 1.6 0l7.65 5.8q.8.6.05.6t-.75 1v8.75q0 1-1 1H5.25q-1 0-1-1V11.5q0-1-.75-1t.05-.6");
}

.re8me7bor {
  d: path("M7.5 13.5v5m9-5v5M10.75 21v-4a1.25 1.25 0 0 1 2.5 0v4");
}
</style><g class="hntgybcog"><path class="ir4zrrbiy"/><circle class="dlwvvub8w"/><path class="re8me7bor"/></g>`,
		"fallback": "iconoven:law-firm",
	});
}

export default Component;
