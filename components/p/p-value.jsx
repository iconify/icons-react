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
		"content": `<style>.bklxxxpba {
  fill: currentColor;
  d: path("M15 10c1.75 4 3.25 9.5 6.5 9.5H15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xspv39b6q {
  d: path("M2.5 19.5c5 0 6-13 9.5-13s4.5 13 9.5 13");
}
</style><g class="ulnmmdpxh"><path class="xspv39b6q"/><path class="bklxxxpba"/></g>`,
		"fallback": "uix-sharp:p-value",
	});
}

export default Component;
