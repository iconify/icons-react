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
		"content": `<style>.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vgaqv-bjs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c7.4 0 9.25 1.85 9.25 9.25S19.4 21.25 12 21.25S2.75 19.4 2.75 12S4.6 2.75 12 2.75Z");
}
</style><g class="ux2u0rbkq"><path class="vgaqv-bjs"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:squircle-sharp",
	});
}

export default Component;
