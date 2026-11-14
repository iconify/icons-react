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
		"content": `<style>.a77g8oisl {
  fill: currentColor;
  d: path("M6.5 11h11v9h-11Z");
}

.r_5ej1lys {
  d: path("M9 11V7a3 3 0 0 1 6 0v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a77g8oisl"/><path class="r_5ej1lys"/></g>`,
		"fallback": "uix-sharp:lock-small",
	});
}

export default Component;
