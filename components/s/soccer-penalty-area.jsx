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
		"content": `<style>.dp2lo8_bx {
  d: path("M2.5 19.5v-17h19v17");
}

.f1wolacea {
  d: path("M6 2.5V12h12V2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xkoa3sbkw {
  d: path("M9 2.5v3.25h6V2.5m-3 6.25h.01M9 12a3 3 0 0 0 6 0");
}
</style><g class="ulnmmdpxh"><path class="dp2lo8_bx"/><path class="f1wolacea"/><path class="xkoa3sbkw"/></g>`,
		"fallback": "uix-sharp:soccer-penalty-area",
	});
}

export default Component;
