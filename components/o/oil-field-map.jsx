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
		"content": `<style>.e_spfzwpz {
  fill: currentColor;
  d: path("M12 2S8.75 6 8.75 8a3.25 3.25 0 0 0 6.5 0c0-2-3.25-6-3.25-6Z");
}

.n8l9ogbkc {
  d: path("M12 14.05V16m4.692-4.231L22 10v10l-6 2l-8-2l-6 2V12l4.459-1.486M8 12.5V20m8-7.5V22");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n8l9ogbkc"/><path class="e_spfzwpz"/></g>`,
		"fallback": "uix-sharp:oil-field-map",
	});
}

export default Component;
