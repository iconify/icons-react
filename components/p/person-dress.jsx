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
		"content": `<style>.zwult4bab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M11.287 8h1.426a1.75 1.75 0 0 1 1.671 1.228l1.406 4.5A1.75 1.75 0 0 1 14.12 16H9.88a1.75 1.75 0 0 1-1.67-2.272l1.406-4.5A1.75 1.75 0 0 1 11.287 8m-.787 8v5m3-5v5");
}
</style><path class="zwult4bab"/>`,
		"fallback": "uix:person-dress",
	});
}

export default Component;
