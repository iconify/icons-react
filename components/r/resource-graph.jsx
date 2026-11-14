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
		"content": `<style>.g-c302a4a {
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-6 13.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm12 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM12 7.5v6");
}

.o_okn2_yd {
  d: path("M6 16v-2.5h12V16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g-c302a4a"/><path class="o_okn2_yd"/></g>`,
		"fallback": "uix-sharp:resource-graph",
	});
}

export default Component;
