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
		"content": `<style>.evmxcr20f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.5v-1a2 2 0 1 0-2-2m4.536 9H2.5l9.5-6l4.058 2.563m3.974 2.51l1.468.927h-1.064m-2.936.25l1.061 2.439L21 17.25l-2.439 1.061L17.5 20.75l-1.061-2.439L14 17.25l2.439-1.061Z");
}
</style><path class="evmxcr20f"/>`,
		"fallback": "uix-sharp:new-in-sign",
	});
}

export default Component;
