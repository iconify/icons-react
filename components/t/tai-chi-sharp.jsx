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
		"content": `<style>.kh53oc2ob {
  d: path("M11 7.5v5m0 0L7 16v5.25m4-8.75l4.5 2.75l1.75 6M11 8.5l4 2l3.5-1.25M11 8.5l-3.75.75L5.5 7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zv0jcqhnw {
  cx: 11px;
  cy: 4.75px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><circle class="zv0jcqhnw"/><path class="kh53oc2ob"/></g>`,
		"fallback": "iconoven:tai-chi-sharp",
	});
}

export default Component;
