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
		"content": `<style>.dzaduvboz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.224 20.882L12 21l-8.5-4.5v-9L12 3l8.5 4.5v4.265M3.5 7.5l5.745 3.041m5.567-.03L20.5 7.5M12 12v2m3 2.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><path class="dzaduvboz"/>`,
		"fallback": "uix-sharp:return-exchange",
	});
}

export default Component;
