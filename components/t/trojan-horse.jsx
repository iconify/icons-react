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
		"content": `<style>.r0gkqm60j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 11h7.25A2.625 2.625 0 0 1 16 13.625v.25a2.625 2.625 0 0 1-2.625 2.625h-7.25A2.625 2.625 0 0 1 3.5 13.875v-.25A2.625 2.625 0 0 1 6.125 11M13 11l2.5-5.5l4-1.5l1 3.5l-3 1L16 11M6 16.5v4m3-4v4m3-4v4m3-4v4");
}
</style><path class="r0gkqm60j"/>`,
		"fallback": "uix:trojan-horse",
	});
}

export default Component;
