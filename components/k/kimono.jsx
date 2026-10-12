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
		"content": `<style>.birgm3bnd {
  d: path("m3.62 5.5l3.51-2Q8 3 9 3h6q1 0 1.87.5l3.51 2q.87.5.87 1.5v4q0 1-1 1H18q-1 0-1 1v7.25q0 1-1 1H8q-1 0-1-1V13q0-1-1-1H3.75q-1 0-1-1V7q0-1 .87-1.5m5.63-2.25l4.5 8.75m1-8.75l-2.3 4.25M7 7v4.5M17 7v4.5");
}

.gnhxk5bjp {
  d: path("M7 12h10v3H7z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="birgm3bnd"/><path class="gnhxk5bjp"/></g>`,
		"fallback": "iconoven:kimono",
	});
}

export default Component;
