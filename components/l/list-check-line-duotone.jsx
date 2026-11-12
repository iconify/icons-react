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

.k35jqkb4g {
  d: path("M10 18H3");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.mlaq8tbmp {
  stroke-linejoin: round;
  d: path("M14 16L16.1 18.5L20 13.5");
}

.mlijwm2tw {
  d: path("M10 14H3");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.rhlnpmbpq {
  d: path("M21 10L3 10");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ynnqgt8sp {
  d: path("M21 6L3 6");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="mlaq8tbmp"/><path class="ynnqgt8sp"/><path class="rhlnpmbpq"/><path class="mlijwm2tw"/><path class="k35jqkb4g"/></g>`,
		"fallback": "solar:list-check-line-duotone",
	});
}

export default Component;
