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
		"content": `<style>.cpeiltgrs {
  d: path("m3.5 12.5l2.5-7a1.5 1.5 0 0 1 1.5-1h9a1.5 1.5 0 0 1 1.5 1l2.5 7M7 16h.01M10 16h.01M18 15v2.75m0 3h.01");
}

.hfbzfq9aq {
  d: path("M12.25 20H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h13.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hfbzfq9aq"/><path class="cpeiltgrs"/></g>`,
		"fallback": "uix-sharp:storage-low",
	});
}

export default Component;
