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
		"content": `<style>.o_49tf26r {
  d: path("M9.5 18.25L12 19.5l2.5-1.25m-8-3.76v-2.75l-1.25-2.5m4.25 4.65V8m7 6.22v-3.75l1.5-3M8.25 3h2.5v5h-2.5z");
}

.v9q4yubzo {
  d: path("M2.75 17.5a9.25 3.75 0 1 0 18.5 0a9.25 3.75 0 1 0-18.5 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="v9q4yubzo"/><path class="o_49tf26r"/></g>`,
		"fallback": "iconoven:pond-sharp",
	});
}

export default Component;
