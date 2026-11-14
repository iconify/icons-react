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
		"content": `<style>.vpstchsfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3h4v3c2 1 2.5 2 2.5 4v8h-9v-8c0-2 .5-3 2.5-4ZM4.5 18h15v3.5h-15Zm6.5-3h.01M13 11.5h.01");
}
</style><path class="vpstchsfy"/>`,
		"fallback": "uix-sharp:soda-maker",
	});
}

export default Component;
