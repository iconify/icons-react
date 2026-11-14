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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-7co39ia {
  d: path("M15 7.5H7A3.5 3.5 0 0 0 3.5 11v5.5A3.5 3.5 0 0 0 7 20h8");
}

.zd_5bfbvn {
  d: path("M8 12.5h13V16H8ZM11 4v8.5M8.5 4h5");
}
</style><g class="ulnmmdpxh"><path class="v-7co39ia"/><path class="zd_5bfbvn"/></g>`,
		"fallback": "uix-sharp:super-clamp",
	});
}

export default Component;
