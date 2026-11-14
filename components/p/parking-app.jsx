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
		"content": `<style>.e3od_zb8f {
  d: path("M10 7h2.5a2.75 2.75 0 0 1 0 5.5H10");
}

.f8dhrmbma {
  d: path("M6 2.5h12v19H6ZM10 17V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f8dhrmbma"/><path class="e3od_zb8f"/></g>`,
		"fallback": "uix-sharp:parking-app",
	});
}

export default Component;
