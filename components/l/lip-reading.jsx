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
		"content": `<style>.diexuobdh {
  d: path("M5.5 13.5c2.25.75 4.5 1 6.5 1s4.25-.25 6.5-1m-11-8.75c2.75-2.5 6.25-2.5 9 0c-2.75 2.5-6.25 2.5-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1xadabxd {
  d: path("M2.75 13.5c3-3.5 6-4.5 9.25-2.75C15.25 9 18.25 10 21.25 13.5c-3 3.75-6 5.5-9.25 5.5s-6.25-1.75-9.25-5.5");
}
</style><g class="hntgybcog"><path class="z1xadabxd"/><path class="diexuobdh"/></g>`,
		"fallback": "iconoven:lip-reading",
	});
}

export default Component;
