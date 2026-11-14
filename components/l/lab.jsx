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
		"content": `<style>.p7uvmrbua {
  d: path("M16 7V4h2v4.75M11 8v2.25l-2.5 3.5h7l-2.5-3.5V8m-2.75 12.5v-2a1.75 1.75 0 0 1 3.5 0v2");
}

.qwkzdyb0f {
  d: path("m4 10.5l8-7l8 7v10H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qwkzdyb0f"/><path class="p7uvmrbua"/></g>`,
		"fallback": "uix-sharp:lab",
	});
}

export default Component;
