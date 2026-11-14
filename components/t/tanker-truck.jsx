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
		"content": `<style>.pj6_uvbkb {
  d: path("M15.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-13-4H16");
}

.qi9wghdsg {
  d: path("M2 10a7 4.5 0 1 0 14 0a7 4.5 0 1 0-14 0Zm14-2h3l2.5 4v4.5H16m-12 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qi9wghdsg"/><path class="pj6_uvbkb"/></g>`,
		"fallback": "uix-sharp:tanker-truck",
	});
}

export default Component;
