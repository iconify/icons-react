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
		"content": `<style>.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y04pthbhp {
  d: path("M5.75 10C7.25 6.5 8.5 6.5 10 10s2.75 3.5 4.25 0S17 6.5 18.5 10");
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="y04pthbhp"/></g>`,
		"fallback": "uix-sharp:oscilloscope-wave",
	});
}

export default Component;
