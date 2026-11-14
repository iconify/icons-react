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
		"content": `<style>.jrxwe5_rx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9H4l3.5-4L11 9l-3.5 4L4 9m7 0h2l3.5-4L20 9l-1.034 1.181m-3.358 1.799L13 9m7 0h1.5m-3.75 5l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}
</style><path class="jrxwe5_rx"/>`,
		"fallback": "uix-sharp:milestone-starred",
	});
}

export default Component;
