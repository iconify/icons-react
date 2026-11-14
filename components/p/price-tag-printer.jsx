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
		"content": `<style>.hkb6gb_hf {
  d: path("M11.2 19.5H8.5l-5-7.5l5-7.5h11v6.4M8.25 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wpzjbfexf {
  d: path("M14 16.25h8v4h-8Zm1.75 0v-2.5h4.5v2.5m-4.5 4V22h4.5v-1.75");
}
</style><g class="ulnmmdpxh"><path class="hkb6gb_hf"/><path class="wpzjbfexf"/></g>`,
		"fallback": "uix-sharp:price-tag-printer",
	});
}

export default Component;
