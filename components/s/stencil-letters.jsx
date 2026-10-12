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

.k-3u0xy6j {
  d: path("m8.75 12.5l1.75-5m3 0l1.75 5m-6.5 0h6.5m-7.55 3l-.7 2m9.3-2l.7 2");
}

.zyt56mbrm {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="zyt56mbrm"/><path class="k-3u0xy6j"/></g>`,
		"fallback": "iconoven:stencil-letters",
	});
}

export default Component;
