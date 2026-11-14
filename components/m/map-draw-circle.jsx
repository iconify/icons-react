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
		"content": `<style>.cdycrpb0p {
  d: path("M11.898 19.471L8.5 18.5l-6 2v-15l6-2l7 2l6-2v9.271M8.5 3.5v15m7-13v6.7");
}

.msw8e_b6b {
  d: path("M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cdycrpb0p"/><path class="msw8e_b6b"/></g>`,
		"fallback": "uix-sharp:map-draw-circle",
	});
}

export default Component;
