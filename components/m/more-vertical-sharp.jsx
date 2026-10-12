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
		"content": `<style>.ap-miurjd {
  cx: 12px;
  cy: 19.25px;
  r: 1.25px;
}

.lf940mbnz {
  cx: 12px;
  cy: 12px;
  r: 1.25px;
}

.r57sxrb_d {
  cx: 12px;
  cy: 4.75px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="r57sxrb_d"/><circle class="lf940mbnz"/><circle class="ap-miurjd"/></g>`,
		"fallback": "iconoven:more-vertical-sharp",
	});
}

export default Component;
