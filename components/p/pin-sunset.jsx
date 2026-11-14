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
		"content": `<style>.qaivvqbrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19h19m-15 0a5.5 5.5 0 0 1 11 0M12 10.75v-2M6 13l-1.75-1.75M18 13l1.75-1.75M4 8h4a2 2 0 0 0 0-4a3 3 0 0 0-5 1.5A1.5 1.5 0 0 0 4 8Z");
}
</style><path class="qaivvqbrx"/>`,
		"fallback": "uix-sharp:pin-sunset",
	});
}

export default Component;
