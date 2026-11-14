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
		"content": `<style>.hrzc23bjy {
  d: path("M2.5 3h19v13.5h-19ZM7 16.5v5m10-5v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0gcmyb3j {
  d: path("M6 6.5h4V13H6Zm10 0V13m-1.5-5L16 6.5");
}
</style><g class="ulnmmdpxh"><path class="hrzc23bjy"/><path class="y0gcmyb3j"/></g>`,
		"fallback": "uix-sharp:scoreboard-digital",
	});
}

export default Component;
