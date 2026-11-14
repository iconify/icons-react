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
		"content": `<style>.i7_enchmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6h9m-9 5h9m-9 5h5m2.5 2a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm5 0V6l4.5 1.5");
}
</style><path class="i7_enchmn"/>`,
		"fallback": "uix-sharp:queue-music",
	});
}

export default Component;
