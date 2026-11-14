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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4r-i3ojp {
  d: path("M12.144 20.5H3.5v-10L12 3.25l8.5 7.25v1.956");
}

.xqsv3pbcn {
  d: path("m18 14.5l3.5 1.25V18c0 2-1.5 3.25-3.5 4c-2-.75-3.5-2-3.5-4v-2.25Z");
}
</style><g class="ulnmmdpxh"><path class="v4r-i3ojp"/><path class="xqsv3pbcn"/></g>`,
		"fallback": "uix-sharp:safe-space",
	});
}

export default Component;
