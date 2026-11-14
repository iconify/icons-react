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
		"content": `<style>.q4yjc8mwb {
  d: path("M2.5 12a9.5 6 0 1 0 19 0a9.5 6 0 1 0-19 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ynpc-ybsz {
  d: path("M6.5 12a5.5 3 0 1 0 11 0a5.5 3 0 1 0-11 0Z");
}
</style><g class="ulnmmdpxh"><path class="q4yjc8mwb"/><path class="ynpc-ybsz"/></g>`,
		"fallback": "uix-sharp:wave-circles",
	});
}

export default Component;
