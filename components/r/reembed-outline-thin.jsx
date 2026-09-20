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
		"content": `<style>.d8z1r1beo {
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kk9zw2b5r {
  d: path("m13.5 9 2.5 2.5 -4 4 -4 -4L10.5 9");
}

.wzx0dxb2r {
  d: path("m12 2 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="d8z1r1beo"/><path class="wzx0dxb2r"/><path class="kk9zw2b5r"/></g>`,
		"fallback": "iconmind:reembed-outline-thin",
	});
}

export default Component;
