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
		"content": `<style>.daxbuyixs {
  d: path("M6.5 20V4m-3 3l3-3l3 3m5.25-1.75l2-1.75v7m-2.25 5.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.m_oal9ugc {
  d: path("M19 15.75v2.75a2 2 0 0 1-2 2h-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="daxbuyixs"/><path class="m_oal9ugc"/></g>`,
		"fallback": "uix-sharp:sort-numeric-up",
	});
}

export default Component;
