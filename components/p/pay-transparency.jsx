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
		"content": `<style>.so39c95yi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 8c2.75-4.75 10.25-4.75 13 0c-2.75 4.75-10.25 4.75-13 0Zm6.5 0h.01m4.24 8.75a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm4.25-1v2");
}
</style><path class="so39c95yi"/>`,
		"fallback": "uix-sharp:pay-transparency",
	});
}

export default Component;
