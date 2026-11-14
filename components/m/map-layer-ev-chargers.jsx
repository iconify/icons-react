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
		"content": `<style>.d6yxgcb0a {
  d: path("M10.75 6.5L7.5 12H11l-2.25 5.5M14.5 14h3a2 2 0 0 0 2-2V6L18 4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9_mdgbcg {
  d: path("M4 3h10.5v18H4Z");
}
</style><g class="ulnmmdpxh"><path class="x9_mdgbcg"/><path class="d6yxgcb0a"/></g>`,
		"fallback": "uix-sharp:map-layer-ev-chargers",
	});
}

export default Component;
