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
		"content": `<style>.fmnrofb-d {
  d: path("M9.5 14a2.5 6 0 1 0 5 0a2.5 6 0 1 0-5 0ZM6 14h12M3.073 10.751a9.5 9.5 0 0 1 5.678-5.678m6.498 0a9.5 9.5 0 0 1 5.678 5.678");
}

.kfik-4tdl {
  d: path("M6 14a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kfik-4tdl"/><path class="fmnrofb-d"/></g>`,
		"fallback": "uix-sharp:ozone-hole",
	});
}

export default Component;
