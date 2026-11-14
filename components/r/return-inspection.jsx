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
		"content": `<style>.g-56du9fb {
  d: path("M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.knu62mbkb {
  d: path("M13.284 20.32L12 21l-8.5-4.5v-9L12 3l8.5 4.5v5.965M3.5 7.5l5.745 3.041m5.567-.03L20.5 7.5M12 12v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="knu62mbkb"/><path class="g-56du9fb"/></g>`,
		"fallback": "uix-sharp:return-inspection",
	});
}

export default Component;
