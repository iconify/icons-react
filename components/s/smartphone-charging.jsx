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
		"content": `<style>.q43c1rbze {
  d: path("m12.75 6.5l-2 3.5h2.5l-2 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wb-3accoe {
  d: path("M6 2.5h12v19H6ZM10.5 18h3");
}
</style><g class="ulnmmdpxh"><path class="wb-3accoe"/><path class="q43c1rbze"/></g>`,
		"fallback": "uix-sharp:smartphone-charging",
	});
}

export default Component;
