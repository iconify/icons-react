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
		"content": `<style>.zdz0w_7kz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.243 4.222l3.535 3.535l-3.535 3.536l-1.415 6.364l-8.485-8.485l6.364-1.415Zm-5.657 9.192l-4.95 4.95");
}
</style><path class="zdz0w_7kz"/>`,
		"fallback": "uix-sharp:pushpin",
	});
}

export default Component;
