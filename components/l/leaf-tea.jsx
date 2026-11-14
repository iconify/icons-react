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
		"content": `<style>.cqev_kbdt {
  d: path("M9 15C9 8 13.5 3.5 20.5 3.5C20.5 10.5 16 15 9 15Zm-3 6.5Q7 17 9 15");
}

.de3_4cc9x {
  d: path("M3.25 10a1.75 3.5 0 1 0 3.5 0a1.75 3.5 0 1 0-3.5 0ZM9 15l5-5");
}

.m5wanwbrf {
  d: path("M7 18.5q-2-2.5-2-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cqev_kbdt"/><path class="m5wanwbrf"/><path class="de3_4cc9x"/></g>`,
		"fallback": "uix-sharp:leaf-tea",
	});
}

export default Component;
