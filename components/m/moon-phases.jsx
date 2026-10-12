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
		"content": `<style>.bj6m0rp9b {
  d: path("M13.75 4.58a8 8 0 1 0 0 14.84a8.5 8.5 0 0 1 0-14.84");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vf78g51_u {
  cx: 18.75px;
  cy: 12px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="bj6m0rp9b"/><circle class="vf78g51_u"/></g>`,
		"fallback": "iconoven:moon-phases",
	});
}

export default Component;
