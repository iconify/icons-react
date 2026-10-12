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
		"content": `<style>.lf940mbnz {
  cx: 12px;
  cy: 12px;
  r: 1.25px;
}

.n0_s6y1ca {
  cx: 19.25px;
  cy: 12px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf18uhbyq {
  cx: 4.75px;
  cy: 12px;
  r: 1.25px;
}
</style><g class="x2cwu0gfd"><circle class="zf18uhbyq"/><circle class="lf940mbnz"/><circle class="n0_s6y1ca"/></g>`,
		"fallback": "iconoven:more-horizontal-sharp",
	});
}

export default Component;
