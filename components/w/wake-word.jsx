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
		"content": `<style>.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvabpdbaa {
  d: path("M8 7.5a6.5 6.5 0 0 0 0 9m8-9a6.5 6.5 0 0 1 0 9M6.25 4.75a10 10 0 0 0 0 14.5m11.5-14.5a10 10 0 0 1 0 14.5");
}
</style><g class="hntgybcog"><circle class="e-2-i017w"/><path class="uvabpdbaa"/></g>`,
		"fallback": "iconoven:wake-word",
	});
}

export default Component;
