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
		"content": `<style>.qhzkoqbno {
  d: path("M9 3h6v5H9ZM2.5 16h5v5h-5Zm7 0h5v5h-5Zm7 0h5v5h-5ZM12 8v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vclzaqops {
  d: path("M5 16v-2a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 14v2");
}
</style><g class="ulnmmdpxh"><path class="qhzkoqbno"/><path class="vclzaqops"/></g>`,
		"fallback": "uix-sharp:sitemap",
	});
}

export default Component;
