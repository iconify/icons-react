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
		"content": `<style>.akic7t7hc {
  d: path("M2.5 6.5L11 11l8.5-4.5M15.25 17a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.icmfddbdb {
  d: path("M18.75 15.25V18a1.25 1.25 0 0 0 2.5 0v-1a4.25 4.25 0 1 0-1.75 3.5");
}

.pt44rummg {
  d: path("M9.9 17H2.5V4h17v6.4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pt44rummg"/><path class="akic7t7hc"/><path class="icmfddbdb"/></g>`,
		"fallback": "uix-sharp:mail-at",
	});
}

export default Component;
