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
		"content": `<style>.f93j-ccio {
  d: path("M2.5 3h19v18h-19Zm12 0v18m-9-12h6.25M5.5 14h4");
}

.grepoxbrv {
  d: path("M18 7.5q1 1.75 0 3.5t0 3.5t0 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f93j-ccio"/><path class="grepoxbrv"/></g>`,
		"fallback": "uix-sharp:margin-notes",
	});
}

export default Component;
