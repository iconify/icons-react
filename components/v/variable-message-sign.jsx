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
		"content": `<style>.e7onlub8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19V15h-19ZM8 15v6m8-6v6M6.5 7.5h11M6.5 11h7");
}
</style><path class="e7onlub8w"/>`,
		"fallback": "uix-sharp:variable-message-sign",
	});
}

export default Component;
