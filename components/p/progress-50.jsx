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
		"content": `<style>.idd13m22d {
  d: path("M2.5 8h19v8h-19Z");
}

.j0-s_guto {
  fill: currentColor;
  d: path("M5 10.5h7v3H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="idd13m22d"/><path class="j0-s_guto"/></g>`,
		"fallback": "uix-sharp:progress-50",
	});
}

export default Component;
