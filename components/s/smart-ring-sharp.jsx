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
		"content": `<style>.hgj314i_g {
  d: path("m9 4.5l3-2.99l3 2.99");
}

.hsg5pubci {
  cx: 12px;
  cy: 14px;
  r: 4.5px;
}

.r6uvok62f {
  cx: 12px;
  cy: 14px;
  r: 7.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="r6uvok62f"/><circle class="hsg5pubci"/><path class="hgj314i_g"/></g>`,
		"fallback": "iconoven:smart-ring-sharp",
	});
}

export default Component;
