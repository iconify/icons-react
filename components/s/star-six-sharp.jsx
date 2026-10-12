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
		"content": `<style>.qswt6xbhp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.49 3.22l1.77 3.15l.49.87l1-.01l3.61-.04l1-.02l-.51.87l-1.84 3.1l-.51.86l.51.86l1.84 3.1l.51.86l-1-.01l-3.61-.04l-1-.01l-.49.87l-1.77 3.15l-.49.87l-.49-.87l-1.77-3.15l-.49-.87l-1 .01l-3.61.04l-1 .02l.51-.87l1.84-3.1l.51-.86l-.51-.86l-1.84-3.1l-.51-.87l1 .02l3.61.04l1 .01l.49-.87l1.77-3.15l.49-.87z");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="qswt6xbhp"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:star-six-sharp",
	});
}

export default Component;
