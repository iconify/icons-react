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
		"content": `<style>.rsqbw-b4i {
  d: path("M5 19a5 5 0 0 1 5-5m8 1v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwgs6ybpy {
  d: path("M10 19h2.2m6.8-6.8V2.5H2.5V19H5m5 0v-5");
}
</style><g class="ulnmmdpxh"><path class="xwgs6ybpy"/><path class="rsqbw-b4i"/></g>`,
		"fallback": "uix-sharp:room-add",
	});
}

export default Component;
