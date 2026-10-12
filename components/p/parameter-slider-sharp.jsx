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
		"content": `<style>.l48-m7blu {
  cx: 8px;
  cy: 7.5px;
  r: 2.5px;
}

.s88z3cf6n {
  d: path("M2.75 7.5h2.5m5.5 0h10.5m-18.5 9H12m7.75 0h1.5");
}

.wke8hi1lr {
  d: path("M15.75 12.75q.45 3.3 3.75 3.75q-3.3.45-3.75 3.75q-.45-3.3-3.75-3.75q3.3-.45 3.75-3.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="s88z3cf6n"/><circle class="l48-m7blu"/><path class="wke8hi1lr"/></g>`,
		"fallback": "iconoven:parameter-slider-sharp",
	});
}

export default Component;
