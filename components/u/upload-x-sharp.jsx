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
		"content": `<style>.smj0t6fho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 15.25v5h16.5v-5m-8.25 0V3.75M7.75 8L12 3.75L16.25 8");
}
</style><path class="smj0t6fho"/>`,
		"fallback": "iconoven:upload-x-sharp",
	});
}

export default Component;
