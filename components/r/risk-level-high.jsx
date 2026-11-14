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
		"content": `<style>.yj_nb8b2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 14.5v6M9 9v11.5m5-17v17m4-6V18m0 3h.01");
}
</style><path class="yj_nb8b2s"/>`,
		"fallback": "uix-sharp:risk-level-high",
	});
}

export default Component;
