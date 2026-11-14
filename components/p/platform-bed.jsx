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

.xhi-_vbse {
  d: path("M3 5v14.5h18V14H3");
}

.zbtg98pkk {
  d: path("M6 9.5h15V14H6Z");
}
</style><g class="ulnmmdpxh"><path class="xhi-_vbse"/><path class="zbtg98pkk"/></g>`,
		"fallback": "uix-sharp:platform-bed",
	});
}

export default Component;
