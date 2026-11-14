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
		"content": `<style>.gdpoz1bmb {
  d: path("m6.5 9.5l3.5-2h3.5l3 3.5l3-1");
}

.n57dydbqj {
  d: path("M13 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm.5 3.5L11 13l3.5 3l-1.5 5m-2-8l-3 3.5l-3.5-.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n57dydbqj"/><path class="gdpoz1bmb"/></g>`,
		"fallback": "uix-sharp:person-running",
	});
}

export default Component;
