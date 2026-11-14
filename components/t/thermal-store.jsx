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
		"content": `<style>.hb3yuqbgf {
  d: path("M6 5a6 2 0 1 0 12 0A6 2 0 1 0 6 5Z");
}

.nfm6lrb4u {
  d: path("M6 5v14a6 2 0 0 0 12 0V5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4p_12bzv {
  d: path("M9 13q1.5-1.5 3 0t3 0m3-3.5h3.5m-19 8H6");
}
</style><g class="ulnmmdpxh"><path class="hb3yuqbgf"/><path class="nfm6lrb4u"/><path class="y4p_12bzv"/></g>`,
		"fallback": "uix-sharp:thermal-store",
	});
}

export default Component;
