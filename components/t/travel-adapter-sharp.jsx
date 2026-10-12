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
		"content": `<style>.nb7yztbgw {
  d: path("M9 7.75V3m6 4.75V3M4.25 7.75h15.5v13.5H4.25z");
}

.t18z8vfkj {
  cx: 12px;
  cy: 14.5px;
  r: 4px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4fu0_bxm {
  d: path("M10.5 13.5v2m3-2v2");
}
</style><g class="x2cwu0gfd"><path class="nb7yztbgw"/><circle class="t18z8vfkj"/><path class="y4fu0_bxm"/></g>`,
		"fallback": "iconoven:travel-adapter-sharp",
	});
}

export default Component;
