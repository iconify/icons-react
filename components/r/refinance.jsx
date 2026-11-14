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
		"content": `<style>.gnkbr4bln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5L9 3l6 4.5m-12 0h12m-12.5 2h13M2.5 20h8.6M4.5 9.5V18M9 9.5V18m4.5-8.5v3.4m1 2.85h6.75M19.5 14l1.75 1.75l-1.75 1.75m2 2.75h-6.75m1.75-1.75l-1.75 1.75L16.5 22");
}
</style><path class="gnkbr4bln"/>`,
		"fallback": "uix-sharp:refinance",
	});
}

export default Component;
