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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqqrrnqba {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.75 7.28l-.5.87l-.25.43h-2l-.25-.43l-.5-.87l-.25-.43l.25-.43l.5-.87l.25-.43h2l.25.43l.5.87l.25.43zm4.9 3.56l-.5.87l-.25.43h-2l-.25-.43l-.5-.87l-.25-.43l.25-.43l.5-.87l.25-.43h2l.25.43l.5.87l.25.43zm-1.87 5.76l-.5.87l-.25.43h-2l-.25-.43l-.5-.87l-.25-.43l.25-.43l.5-.87l.25-.43h2l.25.43l.5.87l.25.43zm-6.06 0l-.5.87l-.25.43h-2l-.25-.43l-.5-.87l-.25-.43l.25-.43l.5-.87l.25-.43h2l.25.43l.5.87l.25.43zm-1.87-5.76l-.5.87l-.25.43h-2l-.25-.43l-.5-.87l-.25-.43l.25-.43l.5-.87l.25-.43h2l.25.43l.5.87l.25.43z");
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
</style><g class="ux2u0rbkq"><circle class="c6vt1lbds"/><path class="to8m3ibcr"/><path class="lqqrrnqba"/></g>`,
		"fallback": "iconoven:lug-nut-sharp",
	});
}

export default Component;
