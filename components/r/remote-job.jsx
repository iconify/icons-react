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
		"content": `<style>.orj0xob0g {
  d: path("M2.5 3h13v8.5h-13ZM2 14h11.5m1 3.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkn4jwb4d {
  d: path("M16.5 17.5a1.5 3.5 0 1 0 3 0a1.5 3.5 0 1 0-3 0Zm-2 0h7");
}
</style><g class="ulnmmdpxh"><path class="orj0xob0g"/><path class="vkn4jwb4d"/></g>`,
		"fallback": "uix-sharp:remote-job",
	});
}

export default Component;
