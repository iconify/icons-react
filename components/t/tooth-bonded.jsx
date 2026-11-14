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
		"content": `<style>.nl9xh03ib {
  d: path("M14 4.25Q14.75 8 19.5 8.5");
}

.u1weepbfx {
  d: path("M12 6c-1.5-1.75-3.5-2.5-5.25-2c-2 .6-2.5 2.75-2.25 5c.25 2.5 1.5 4 2.25 6.5l1 4.5c.25 1 1.75 1 2 0l1-4c.25-1 2.25-1 2.5 0l1 4c.25 1 1.75 1 2 0l1-4.5c.75-2.5 2-4 2.25-6.5c.25-2.25-.25-4.4-2.25-5c-1.75-.5-3.75.25-5.25 2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u1weepbfx"/><path class="nl9xh03ib"/></g>`,
		"fallback": "uix-sharp:tooth-bonded",
	});
}

export default Component;
