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
		"content": `<style>.larev_2uk {
  d: path("M8.5 11.25H13v4.5H8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zu1iks2yj {
  d: path("M5 6h14l-1.5 15h-11Zm10 11.5l3.5-15m-13 6h13");
}
</style><g class="ulnmmdpxh"><path class="zu1iks2yj"/><path class="larev_2uk"/></g>`,
		"fallback": "uix-sharp:soda-glass",
	});
}

export default Component;
