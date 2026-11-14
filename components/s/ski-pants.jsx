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
		"content": `<style>.pat-uzb5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8h12l1.5 13.5H14L12 13l-2 8.5H4.5Zm1.5 0l1-5.5m8 5.5l-1-5.5m-10.75 16h6m2.5 0h6");
}
</style><path class="pat-uzb5p"/>`,
		"fallback": "uix-sharp:ski-pants",
	});
}

export default Component;
