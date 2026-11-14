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
		"content": `<style>.ia3zx5b9z {
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm2.25 5v4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wzbbdaxpw {
  d: path("m4 6l8 5l8-5M6.5 18.75L12 14.5l5.5 4.25m-14 2.75h17");
}
</style><g class="ulnmmdpxh"><path class="ia3zx5b9z"/><path class="wzbbdaxpw"/></g>`,
		"fallback": "uix-sharp:snow-angel",
	});
}

export default Component;
