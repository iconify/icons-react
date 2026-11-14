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
		"content": `<style>.bt_nlbbqn {
  d: path("M10 20.5V10l5.75-6l5.75 6v10.5Zm0-7L6.25 9.75L2.5 13.5v7H10");
}

.skneo8b4r {
  d: path("M14 15h3.5v5.5H14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bt_nlbbqn"/><path class="skneo8b4r"/></g>`,
		"fallback": "uix-sharp:village",
	});
}

export default Component;
