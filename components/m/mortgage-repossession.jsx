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
		"content": `<style>.qo238wmvh {
  d: path("M16 7V4h2v4.75M9 20.5v-7h6v7m-7.5-6l9 4m-9 0l9-4");
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
</style><g class="ulnmmdpxh"><path class="qwkzdyb0f"/><path class="qo238wmvh"/></g>`,
		"fallback": "uix-sharp:mortgage-repossession",
	});
}

export default Component;
