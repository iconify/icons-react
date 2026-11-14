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
		"content": `<style>.em8p8-e1v {
  d: path("m5 20.5l11.5-14C17.75 5 19 4.5 21 5");
}

.ktq0czpzp {
  d: path("M19 20.5L7.5 6.5C6.25 5 5 4.5 3 5m3.5 9l3 2.5m8-2.5l-3 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em8p8-e1v"/><path class="ktq0czpzp"/></g>`,
		"fallback": "uix-sharp:skis-crossed",
	});
}

export default Component;
