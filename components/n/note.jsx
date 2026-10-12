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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s4vcfdlix {
  d: path("M20.25 13.75v-7.5a2.5 2.5 0 0 0-2.5-2.5H6.25a2.5 2.5 0 0 0-2.5 2.5v11.5a2.5 2.5 0 0 0 2.5 2.5h7.5Z");
}

.xsp3nxb2k {
  d: path("M13.75 20.25v-4a2.5 2.5 0 0 1 2.5-2.5h4m-12.5-5.5h8.5m-8.5 3.5h4.5");
}
</style><g class="hntgybcog"><path class="s4vcfdlix"/><path class="xsp3nxb2k"/></g>`,
		"fallback": "iconoven:note",
	});
}

export default Component;
