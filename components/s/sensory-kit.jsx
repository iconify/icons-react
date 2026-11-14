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
		"content": `<style>.qrts5lpia {
  d: path("M6 13.5q3-3 6 0t6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vl4874iwz {
  d: path("M2.5 7h19v13h-19Zm6 0V5A1.5 1.5 0 0 1 10 3.5h4A1.5 1.5 0 0 1 15.5 5v2");
}
</style><g class="ulnmmdpxh"><path class="vl4874iwz"/><path class="qrts5lpia"/></g>`,
		"fallback": "uix-sharp:sensory-kit",
	});
}

export default Component;
