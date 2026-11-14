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
		"content": `<style>.z_v-3u8rv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13.5h10a3.5 3.5 0 1 0-.5-7a4.5 4.5 0 1 0-9 0a3.5 3.5 0 1 0-.5 7Zm-.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-3.25 3a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="z_v-3u8rv"/>`,
		"fallback": "uix-sharp:thought-bubble",
	});
}

export default Component;
