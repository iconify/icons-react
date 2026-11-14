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
		"content": `<style>.c7g_t7bfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h15l2 14h-19Zm3 3v8m-1.25-3h2.5M12 8v8m-1.25-6h2.5m3.25-2v8m-1.25-2h2.5");
}
</style><path class="c7g_t7bfl"/>`,
		"fallback": "uix-sharp:lighting-desk",
	});
}

export default Component;
