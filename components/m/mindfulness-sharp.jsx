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
		"content": `<style>.o4hwskb8a {
  d: path("M15.5 21.25v-3h3.25V14.5l1.5-.6l.683-.295L20.5 13l-1.75-2.75a7.25 7.25 0 1 0-12 6v5Z");
}

.t0ewb9b7r {
  d: path("m11.5 6.75l1.9 1.535v4.192L11.5 13.5l-1.9-1.023V8.285z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="o4hwskb8a"/><path class="t0ewb9b7r"/></g>`,
		"fallback": "iconoven:mindfulness-sharp",
	});
}

export default Component;
