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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.murw5tb-p {
  d: path("M2 9a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.nj-oiubfo {
  d: path("M8 7v10");
}

.nktjbrhkd {
  d: path("M4 4h16");
}

.y_uork5-p {
  d: path("M15 7v10");
}
</style><g class="hntgybcog"><path class="nktjbrhkd"/><path class="murw5tb-p"/><path class="nj-oiubfo"/><path class="y_uork5-p"/></g>`,
		"fallback": "iconmind:registry-image-outline-thin",
	});
}

export default Component;
