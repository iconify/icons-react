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
		"content": `<style>.s3ct93czc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5h19m-19 0v-8m4.75 8v-4m4.75 4v-8m4.75 8v-4m4.75 4v-8M14 16.25l-2.25 3.25h4.5Z");
}
</style><path class="s3ct93czc"/>`,
		"fallback": "uix-sharp:temperature-scale",
	});
}

export default Component;
