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
		"content": `<style>.chqru_b1b {
  d: path("M2.5 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm13 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ly8redbqe {
  d: path("m5.5 11.5l3.5-5h7");
}

.m2rmijbmh {
  d: path("m18.5 11.5l-4-8H12M2.5 18.75a9.5 2 0 1 0 19 0a9.5 2 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="chqru_b1b"/><path class="ly8redbqe"/><path class="m2rmijbmh"/></g>`,
		"fallback": "uix-sharp:speedway-bike",
	});
}

export default Component;
