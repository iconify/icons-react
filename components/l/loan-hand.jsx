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
		"content": `<style>.ux3vg_bix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.75v7.5m3-6.5h2.5l2.1-1.1a2 2 0 0 1 .95-.25h2.45a1.5 1.5 0 0 1 0 3H11.5m-5.75 4.35h6.6a3 3 0 0 0 1.85-.65l5.6-4.4a1.5 1.5 0 0 0-1.85-2.35l-3.2 2.5M9.98 5.47a3.75 3.75 0 0 1 7.04 0m.61-1.66l-.61 1.66l-1.53-.88m1.53 3.44a3.75 3.75 0 0 1-7.04 0m-.61 1.66l.61-1.66l1.53.88");
}
</style><path class="ux3vg_bix"/>`,
		"fallback": "iconoven:loan-hand",
	});
}

export default Component;
