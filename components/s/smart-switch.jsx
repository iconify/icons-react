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
		"content": `<style>.bf2gx8bof {
  d: path("M11.1 16.5H3.5v-14h15v10.4");
}

.kb4q4jn6h {
  d: path("M8 5.5h6v8H8Zm0 4h6m.25 7.75a5.3 5.3 0 0 1 7.5 0M16 19a2.83 2.83 0 0 1 4 0m-2 2h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bf2gx8bof"/><path class="kb4q4jn6h"/></g>`,
		"fallback": "uix-sharp:smart-switch",
	});
}

export default Component;
