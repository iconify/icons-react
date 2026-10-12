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
		"content": `<style>.fb9vxbc2r {
  d: path("M4.01 9.09a8.5 8.5 0 0 1 15.98 0m-2.26-1.06l2.26 1.06l1.06-2.26m-1.06 8.08a8.5 8.5 0 0 1-15.98 0m2.26 1.06l-2.26-1.06l-1.06 2.26");
}

.ons53cb4g {
  cx: 12px;
  cy: 12px;
  r: 2.5px;
}

.qku5pibwd {
  d: path("M12 6.5v.75m0 9.5v.75M6.5 12h.75m9.5 0h.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fb9vxbc2r"/><circle class="ons53cb4g"/><path class="qku5pibwd"/></g>`,
		"fallback": "iconoven:renewable-cycle-sharp",
	});
}

export default Component;
