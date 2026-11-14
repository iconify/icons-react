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
		"content": `<style>.z96x5db8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20L8.5 4.5L14 20m-9-5h7m6.5-10.5v6m-3-3h6");
}
</style><path class="z96x5db8n"/>`,
		"fallback": "uix-sharp:large-text",
	});
}

export default Component;
