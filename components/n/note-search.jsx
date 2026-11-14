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
		"content": `<style>.sewvumb9s {
  d: path("M14 20v-4a2 2 0 0 1 2-2h4M7.75 10.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm4.75 2l1.25 1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.upbcgobek {
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8l-6 6H6a2 2 0 0 1-2-2Z");
}
</style><g class="ulnmmdpxh"><path class="upbcgobek"/><path class="sewvumb9s"/></g>`,
		"fallback": "uix-sharp:note-search",
	});
}

export default Component;
