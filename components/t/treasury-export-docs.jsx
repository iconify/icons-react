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
		"content": `<style>.cf1wgdcih {
  d: path("M10.75 9.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 11v6.5m-2-4.75h4M8.25 14.5a3.75 3.75 0 0 0 7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xh8pp1b-p {
  d: path("M3 6a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="xh8pp1b-p"/><path class="cf1wgdcih"/></g>`,
		"fallback": "uix:treasury-export-docs",
	});
}

export default Component;
