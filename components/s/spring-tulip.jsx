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
		"content": `<style>.kse_6cclz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 4l2.25 2.5l2.25-3l2.25 3L16.5 4v4.5a4.5 4.5 0 0 1-9 0Zm4.5 9v8.5m0-1.5c-4-.5-6-3-6-6c3 .5 5.5 2.5 6 6m0 0c4-.5 6-3 6-6c-3 .5-5.5 2.5-6 6");
}
</style><path class="kse_6cclz"/>`,
		"fallback": "uix-sharp:spring-tulip",
	});
}

export default Component;
