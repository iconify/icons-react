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
		"content": `<style>.srb-_bo3n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8h2.75a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H6.5l-2 3v-3a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2Zm12.25 0h2.75a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2v3l-2-3h-.75a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2ZM12 3.5v17");
}
</style><path class="srb-_bo3n"/>`,
		"fallback": "uix-sharp:prompt-compare",
	});
}

export default Component;
