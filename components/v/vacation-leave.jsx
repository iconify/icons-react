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
		"content": `<style>.tseino7fo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18m-9 0v-11m-7.5 1a8 6 0 0 1 15 0Zm13.5-6h.01");
}
</style><path class="tseino7fo"/>`,
		"fallback": "uix-sharp:vacation-leave",
	});
}

export default Component;
