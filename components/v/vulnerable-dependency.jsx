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
		"content": `<style>.hinjj0bwd {
  d: path("M13.993 15.183L9.5 17.75l-7-4V6l7-4l7 4v4.038");
}

.p5uc4-iyg {
  d: path("m2.5 6l7 3.75l7-3.75m-7 3.75v8m8.5-4.5l4 8.25h-8Zm0 3.25v1.75M18 20h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hinjj0bwd"/><path class="p5uc4-iyg"/></g>`,
		"fallback": "uix-sharp:vulnerable-dependency",
	});
}

export default Component;
