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
		"content": `<style>.at2h5l5gb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18v16H3Zm4 12v-4m3.5 4V8m3.5 8v-6m3.5 6v-3");
}
</style><path class="at2h5l5gb"/>`,
		"fallback": "uix-sharp:spectrum-analyzer",
	});
}

export default Component;
