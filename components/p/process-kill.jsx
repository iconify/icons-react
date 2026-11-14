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
		"content": `<style>.ecfojg_jw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.134 16.12L4 21V3l15 9l-1.893 1.136M15.5 15.5l5 5m0-5l-5 5");
}
</style><path class="ecfojg_jw"/>`,
		"fallback": "uix-sharp:process-kill",
	});
}

export default Component;
