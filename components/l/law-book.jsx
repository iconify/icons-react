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
		"content": `<style>.hd1t0j2zq {
  d: path("M19.25 16.25h-12a2.5 2.5 0 0 0-2.5 2.5M8.75 7h6.5m-6.5 3.25h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l3qt-la5f {
  d: path("M19.25 2.75v18.5h-12a2.5 2.5 0 0 1-2.5-2.5V5.25a2.5 2.5 0 0 1 2.5-2.5Z");
}
</style><g class="hntgybcog"><path class="l3qt-la5f"/><path class="hd1t0j2zq"/></g>`,
		"fallback": "iconoven:law-book",
	});
}

export default Component;
