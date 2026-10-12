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
		"content": `<style>.p77fmg3mv {
  d: path("m6.25 11.75l2 1.75l-2 1.75m4.25 0H13M18.25 3l.36 2.64l2.64.36l-2.64.36L18.25 9l-.36-2.64L15.25 6l2.64-.36z");
}

.vui-sxbzn {
  d: path("M2.75 8.75h14.5v9.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vui-sxbzn"/><path class="p77fmg3mv"/></g>`,
		"fallback": "iconoven:magic-prompt-sharp",
	});
}

export default Component;
