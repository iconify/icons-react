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
		"content": `<style>.du6_nbbxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.5h6.5A1.75 1.75 0 0 1 17 4.25v1.248a1.75 1.75 0 0 1-.266.928l-1.968 3.148a1.75 1.75 0 0 0-.266.928v9.248a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-9.248a1.75 1.75 0 0 0-.266-.928L7.266 6.426A1.75 1.75 0 0 1 7 5.498V4.25A1.75 1.75 0 0 1 8.75 2.5M7 6h10m-5 7v2.5");
}
</style><path class="du6_nbbxa"/>`,
		"fallback": "uix:torch",
	});
}

export default Component;
