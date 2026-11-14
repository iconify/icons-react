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
		"content": `<style>.f3zau1bda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v11h-19Zm4 11v3h11v-3M12 17v4.5M8 6.75h.01m7.99 0h.01M8 10.25h.01m7.99 0h.01");
}
</style><path class="f3zau1bda"/>`,
		"fallback": "uix-sharp:led-panel",
	});
}

export default Component;
