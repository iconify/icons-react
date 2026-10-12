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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9-4ps-hp {
  d: path("M6.31 4.71a9.25 9.25 0 0 1 11.38 0q-1.17 3.5.49 4a7 7 0 0 1 0 6.58q-1.66.5-.49 4a9.25 9.25 0 0 1-11.38 0q1.17-3.5-.49-4a7 7 0 0 1 0-6.58q1.66-.5.49-4");
}

.zufhtjckp {
  cx: 12px;
  cy: 12px;
  r: 3.75px;
}
</style><g class="hntgybcog"><path class="j9-4ps-hp"/><circle class="zufhtjckp"/></g>`,
		"fallback": "iconoven:lens-hood",
	});
}

export default Component;
