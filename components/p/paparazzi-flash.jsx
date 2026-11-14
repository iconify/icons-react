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
		"content": `<style>.dmwiw_b_o {
  d: path("M8.75 15a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4qo4j-py {
  d: path("M3 8.75h18V21H3Zm9-6.25V6M6 3l2 3m10-3l-2 3");
}
</style><g class="ulnmmdpxh"><path class="y4qo4j-py"/><path class="dmwiw_b_o"/></g>`,
		"fallback": "uix-sharp:paparazzi-flash",
	});
}

export default Component;
