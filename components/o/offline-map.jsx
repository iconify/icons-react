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
		"content": `<style>.ognnb2bce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6L9 4l6 2l5.5-2v16L15 22l-6-2l-5.5 2ZM9 4v16m6-14v16M5.5 3L20 21.5");
}
</style><path class="ognnb2bce"/>`,
		"fallback": "uix-sharp:offline-map",
	});
}

export default Component;
