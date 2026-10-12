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
		"content": `<style>.e9ibk_bvq {
  d: path("M5.5 16.75L7.75 19m4.52-5.51l7.58-7.58q.53-.53 0-1.06l-.7-.7q-.53-.53-1.06 0l-7.58 7.58q-.53.53 0 1.06l.7.7q.53.53 1.06 0m4.13-7.64l-1.2-1.2m-.8 3.2l-1.2-1.2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m7t8mzb_c {
  cx: 7.5px;
  cy: 16.5px;
  r: 4.75px;
}
</style><g class="hntgybcog"><circle class="m7t8mzb_c"/><path class="e9ibk_bvq"/></g>`,
		"fallback": "iconoven:sitar",
	});
}

export default Component;
