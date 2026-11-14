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
		"content": `<style>.o8xpp1b_v {
  d: path("M7.5 8.75v5l4-2.5ZM15 9l2.75-2.75a2.125 2.125 0 1 1 3 0a2.125 2.125 0 0 1-3 0");
}

.pv-6-1baj {
  d: path("M19 9.7V17H2.5V5.5h11.9M6 20.5h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pv-6-1baj"/><path class="o8xpp1b_v"/></g>`,
		"fallback": "uix-sharp:live-pinned-comment",
	});
}

export default Component;
