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
		"content": `<style>.am_jncbum {
  d: path("M7.5 16.5v-4l1.5-4h6l1.5 4v4Zm0-4h9m-7.5 4v2m6-2v2");
}

.i5k0ytb0x {
  d: path("M3 2.5v19h18v-19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i5k0ytb0x"/><path class="am_jncbum"/></g>`,
		"fallback": "uix-sharp:parking-bay-compact",
	});
}

export default Component;
