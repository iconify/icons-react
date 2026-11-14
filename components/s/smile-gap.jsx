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
		"content": `<style>.nijf-vbub {
  d: path("M6 12.5h12a6 6 0 0 1-12 0Z");
}

.sri_h-bzs {
  d: path("M6.75 15.5h3.75v-3m3 0v3h3.75m-8.75-7h.01m6.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="nijf-vbub"/><path class="sri_h-bzs"/></g>`,
		"fallback": "uix-sharp:smile-gap",
	});
}

export default Component;
