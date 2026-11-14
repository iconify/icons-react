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
		"content": `<style>.oju6c8s_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 18.5v-3m4.5 3v-6m4.5 6V9m4.5 9.5v-13");
}
</style><path class="oju6c8s_p"/>`,
		"fallback": "uix-sharp:signal-bars",
	});
}

export default Component;
