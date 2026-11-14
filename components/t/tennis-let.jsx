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
		"content": `<style>.cywk_tlzr {
  d: path("M9 4.5A3.25 3.25 0 0 1 9 9m6-4.5A3.25 3.25 0 0 0 15 9");
}

.k9gbddamb {
  d: path("M3 21V10.5h18V21M3 17.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yfa763b-b {
  d: path("M8.25 6.75a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM12 10.5v7");
}
</style><g class="ulnmmdpxh"><path class="k9gbddamb"/><path class="yfa763b-b"/><path class="cywk_tlzr"/></g>`,
		"fallback": "uix-sharp:tennis-let",
	});
}

export default Component;
