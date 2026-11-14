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
		"content": `<style>.mo08jxb3d {
  d: path("M15 14.5h6l-3 3.25Zm3 3.25v3.5m-2 0h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yh3t8wb8a {
  d: path("M13.1 16.5H2.5v-13h17v8.2M6.75 3.5v7m4.25-7v7m4.25-7v7");
}
</style><g class="ulnmmdpxh"><path class="yh3t8wb8a"/><path class="mo08jxb3d"/></g>`,
		"fallback": "uix-sharp:piano-bar",
	});
}

export default Component;
