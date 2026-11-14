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
		"content": `<style>.gvnvc2byo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h19v11h-19Zm4 3.5h.01M10 11h.01M14 11h.01m3.49 0h.01M8 15h8");
}
</style><path class="gvnvc2byo"/>`,
		"fallback": "uix-sharp:typing-lesson",
	});
}

export default Component;
