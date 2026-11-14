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
		"content": `<style>.bwgo-07ox {
  d: path("M2.5 9h3v6h-3m19-6h-3v6h3");
}

.ctxb9ubwr {
  d: path("M2.5 5h19v14h-19ZM12 5v14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ctxb9ubwr"/><path class="bwgo-07ox"/></g>`,
		"fallback": "uix-sharp:water-polo-pool",
	});
}

export default Component;
