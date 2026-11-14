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
		"content": `<style>.dkx63t2vb {
  d: path("m14.5 16.75l1.5 1.5l2.75-3");
}

.n85zcbbbf {
  d: path("M10.9 21.5H4.5v-19h15v7.1M8 7h8m-8 3.5h3.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ylabgsd1k {
  d: path("M11.75 16.5a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="n85zcbbbf"/><path class="ylabgsd1k"/><path class="dkx63t2vb"/></g>`,
		"fallback": "uix-sharp:mortgage-approved",
	});
}

export default Component;
