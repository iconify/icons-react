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
		"content": `<style>.dy1z1eb3f {
  d: path("M8 3v2.5L5.5 8v11a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8L16 5.5V3M5.5 11h13");
}

.l1zujjbeg {
  d: path("M12 2.5V18m0-5q-3 1-3.5 4.5M12 13q3 1 3.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dy1z1eb3f"/><path class="l1zujjbeg"/></g>`,
		"fallback": "uix-sharp:roots-water",
	});
}

export default Component;
