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
		"content": `<style>.jvkldmbno {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.75v16.5M3.75 12h16.5M12 3.75h8.25m0 8.25v8.25m-8.25 0H3.75m0-8.25V3.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.yfgzlm35n {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 7.75h.01m8.49 0h.01m-8.51 8.5h.01m8.49 0h.01");
}
</style><g class="ux2u0rbkq"><path class="jvkldmbno"/><path class="yfgzlm35n"/></g>`,
		"fallback": "iconoven:swastika-hindu-sharp",
	});
}

export default Component;
