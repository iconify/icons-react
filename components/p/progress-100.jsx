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
		"content": `<style>.sdoaq6bqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8h15a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Zm1 4h13");
}
</style><path class="sdoaq6bqm"/>`,
		"fallback": "uix-sharp:progress-100",
	});
}

export default Component;
