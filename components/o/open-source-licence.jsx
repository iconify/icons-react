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
		"content": `<style>.p1m3b6bcp {
  d: path("M11.7 21H3V2.5h14v7.6M6.5 7h7m-7 4h7m-7 4H10m4.5 1.5h7v5h-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2foromno {
  d: path("M16.25 16.5v-2a1.75 1.75 0 0 1 3.5 0");
}
</style><g class="ulnmmdpxh"><path class="p1m3b6bcp"/><path class="z2foromno"/></g>`,
		"fallback": "uix-sharp:open-source-licence",
	});
}

export default Component;
