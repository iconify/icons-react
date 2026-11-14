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
		"content": `<style>.jq0kgrbmn {
  d: path("M13 3.25a8 8 0 0 1 7 12l-7-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ye3_gfbdr {
  d: path("M10.5 4.75a8 8 0 1 0 7 12l-7-4Z");
}
</style><g class="ulnmmdpxh"><path class="ye3_gfbdr"/><path class="jq0kgrbmn"/></g>`,
		"fallback": "uix-sharp:vote-pie",
	});
}

export default Component;
