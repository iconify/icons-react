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
		"content": `<style>.sn4rywsvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8M7.5 13v-2.5m3 2.5V7m3 6V9m3 4V7.5");
}
</style><path class="sn4rywsvy"/>`,
		"fallback": "uix-sharp:system-monitor",
	});
}

export default Component;
