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
		"content": `<style>.s_hd_sdkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4.5m-14 5V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.5M3 12h3m4.5 0h3m4.5 0h3");
}
</style><path class="s_hd_sdkc"/>`,
		"fallback": "uix:text-page-break",
	});
}

export default Component;
