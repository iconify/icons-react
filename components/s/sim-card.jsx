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
		"content": `<style>.h_pf9yb8w {
  d: path("M5 2.5h9.5L19 7v14.5H5Z");
}

.ok1vbhbyv {
  d: path("M8 10h8v8.5H8Zm0 4.25h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h_pf9yb8w"/><path class="ok1vbhbyv"/></g>`,
		"fallback": "uix-sharp:sim-card",
	});
}

export default Component;
