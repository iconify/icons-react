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
		"content": `<style>.hkdh51b8p {
  d: path("M5 2.5h14V19l-2 2l-2-2l-2 2l-2-2l-2 2l-2-2l-2 2Z");
}

.mi116-bvs {
  d: path("M14.5 6.5H10l-.5 3.75q1.125-.75 2.25-.75c1.65 0 3 1.25 3 3s-1.35 3-3 3c-1 0-1.85-.4-2.5-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hkdh51b8p"/><path class="mi116-bvs"/></g>`,
		"fallback": "uix-sharp:queue-ticket",
	});
}

export default Component;
