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
		"content": `<style>.hbasqibox {
  fill: currentColor;
  d: path("M13.5 7H19v14.5h-5.5Z");
}

.k1e5_0bdq {
  d: path("M4.5 11H10v10.5H4.5Z");
}

.ujof44wqh {
  d: path("M2.5 21.5h19M11.5 11h.75m8 0h1.25m-5.25-5.75v-3M14.5 4l1.75-1.75L18 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k1e5_0bdq"/><path class="hbasqibox"/><path class="ujof44wqh"/></g>`,
		"fallback": "uix-sharp:variance-up",
	});
}

export default Component;
