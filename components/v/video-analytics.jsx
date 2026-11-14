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
		"content": `<style>.p4fxy0ekv {
  d: path("M11.9 17.5H2.5V4h19v7.8");
}

.st8bpl8_q {
  d: path("m16.75 19l1.5-2.25L19.5 18l2-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwy_vk3_s {
  d: path("M11.954 12.405L9.5 14V7.5l5 3.25l-1.456.946M14.75 14.5v6.75h6.75");
}
</style><g class="ulnmmdpxh"><path class="p4fxy0ekv"/><path class="zwy_vk3_s"/><path class="st8bpl8_q"/></g>`,
		"fallback": "uix-sharp:video-analytics",
	});
}

export default Component;
