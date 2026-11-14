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
		"content": `<style>.f0-1fctms {
  d: path("M7 13V8.5l5-3.25l5 3.25V13Z");
}

.jdq7e0nga {
  d: path("M3 2.5h18V16H3ZM12 16v5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jdq7e0nga"/><path class="f0-1fctms"/></g>`,
		"fallback": "uix-sharp:residents-only-sign",
	});
}

export default Component;
