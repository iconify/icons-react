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
		"content": `<style>.ltu7ribrk {
  d: path("m2 9l3 3l3-3m1 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0h3.75m-1 0v2");
}

.mk5xfob2d {
  d: path("M5 12a8 8 0 1 1 4 6.928");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mk5xfob2d"/><path class="ltu7ribrk"/></g>`,
		"fallback": "uix-sharp:recovery-crypto",
	});
}

export default Component;
