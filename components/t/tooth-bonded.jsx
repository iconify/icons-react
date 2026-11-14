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
		"content": `<style>.beldj37-c {
  d: path("M12 6c-1.5-1.75-3.5-2.5-5.25-2c-2 .6-2.5 2.75-2.25 5c.25 2.5 1.5 4 2.25 6.5l1 4.5c.25 1 1.75 1 2 0l1-4c.25-1 2.25-1 2.5 0l1 4c.25 1 1.75 1 2 0l1-4.5c.75-2.5 2-4 2.25-6.5c.25-2.25-.25-4.4-2.25-5c-1.75-.5-3.75.25-5.25 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nl9xh03ib {
  d: path("M14 4.25Q14.75 8 19.5 8.5");
}
</style><g class="hntgybcog"><path class="beldj37-c"/><path class="nl9xh03ib"/></g>`,
		"fallback": "uix:tooth-bonded",
	});
}

export default Component;
