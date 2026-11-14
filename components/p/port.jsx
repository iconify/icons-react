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
		"content": `<style>.ew0qi9bid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18M12 5v12M9 8a3 3 0 1 1 6 0m-8 7a5 5 0 0 0 10 0");
}
</style><path class="ew0qi9bid"/>`,
		"fallback": "uix-sharp:port",
	});
}

export default Component;
