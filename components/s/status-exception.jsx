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
		"content": `<style>.f5gbljm1r {
  d: path("M15.213 19.799L12 21.5L3.5 17V7L12 2.5L20.5 7v4.682");
}

.fa6-kr0qj {
  d: path("m3.5 7l8.5 4.5L20.5 7M12 11.5v10m6-7V18m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f5gbljm1r"/><path class="fa6-kr0qj"/></g>`,
		"fallback": "uix-sharp:status-exception",
	});
}

export default Component;
