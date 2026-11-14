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
		"content": `<style>.div1mjs6h {
  d: path("m18.5 14l3 3l-3 3");
}

.fea7n9bfx {
  d: path("M2.5 7H6c5 0 7 10 12 10h3.5m-3-13l3 3l-3 3");
}

.fq6jk4b8t {
  d: path("M2.5 17H6c5 0 7-10 12-10h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fq6jk4b8t"/><path class="fea7n9bfx"/><path class="div1mjs6h"/></g>`,
		"fallback": "uix-sharp:shuffle-2",
	});
}

export default Component;
