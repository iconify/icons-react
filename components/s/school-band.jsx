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
		"content": `<style>.f8d28ymxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h12v3h-12Zm12 0L21 6.5v10L14.5 13ZM6 10V6.5M9 10V6.5m3 3.5V6.5M6 13v4h6v-4");
}
</style><path class="f8d28ymxm"/>`,
		"fallback": "uix-sharp:school-band",
	});
}

export default Component;
