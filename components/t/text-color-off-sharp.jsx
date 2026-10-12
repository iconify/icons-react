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
		"content": `<style>.aduq8pblq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 15L12 3.75L17.5 15m-9-4h7M3.25 17.5h17.5V21H3.25z");
}
</style><path class="aduq8pblq"/>`,
		"fallback": "iconoven:text-color-off-sharp",
	});
}

export default Component;
