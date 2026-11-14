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
		"content": `<style>.m_-eh5b0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 5l14 14m0-14L5 19M5 9V5h4m6 0h4v4m0 6v4h-4m-6 0H5v-4");
}
</style><path class="m_-eh5b0j"/>`,
		"fallback": "uix-sharp:move-diagonal",
	});
}

export default Component;
