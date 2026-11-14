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
		"content": `<style>.c2o1yq3om {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm3-6.5l13 13");
}

.gu2vdvblv {
  d: path("M8 9h8v7H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c2o1yq3om"/><path class="gu2vdvblv"/></g>`,
		"fallback": "uix-sharp:prohibited-items",
	});
}

export default Component;
