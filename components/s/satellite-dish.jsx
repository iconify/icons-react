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
		"content": `<style>.nuocqebsv {
  d: path("M4.5 8A8.5 8.5 0 0 0 16 19.5Zm5.75 5.75L15 9m-.25-1a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.pswg8r1jz {
  d: path("m8 18l-2 3.5h6m5.035-17.364a4 4 0 0 1 2.829 2.829");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nuocqebsv"/><path class="pswg8r1jz"/></g>`,
		"fallback": "uix-sharp:satellite-dish",
	});
}

export default Component;
