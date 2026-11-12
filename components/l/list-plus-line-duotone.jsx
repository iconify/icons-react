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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rhlnpmbpq {
  d: path("M21 10L3 10");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.vi7mzdtvt {
  d: path("M11 14L3 14");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.x_2hitbgb {
  d: path("M21 16.5L17.5 16.5M17.5 16.5L14 16.5M17.5 16.5L17.5 13M17.5 16.5L17.5 20");
}

.ynnqgt8sp {
  d: path("M21 6L3 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zbwqridka {
  d: path("M11 18H3");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="ynnqgt8sp"/><path class="rhlnpmbpq"/><path class="vi7mzdtvt"/><path class="zbwqridka"/><path class="x_2hitbgb"/></g>`,
		"fallback": "solar:list-plus-line-duotone",
	});
}

export default Component;
