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
		"content": `<style>.tdworcccr {
  d: path("M10 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0ZM2.5 18h10v3.5h-10Zm13-10h.01m3.99 8.25a3.5 3.5 0 0 1-3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z6fzfac5j {
  d: path("m18 17.75l-2 2l2 2");
}
</style><g class="ulnmmdpxh"><path class="tdworcccr"/><path class="z6fzfac5j"/></g>`,
		"fallback": "uix-sharp:robot-vacuum-return",
	});
}

export default Component;
