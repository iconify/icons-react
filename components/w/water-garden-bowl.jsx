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
		"content": `<style>.qu10e-b9u {
  d: path("M7.5 15q2.25-1.25 4.5 0t4.5 0M12 11V6m0 1.5c0-2 1.75-3.5 4.25-3.5c0 2-1.75 3.5-4.25 3.5Zm0 1C9.5 8.5 7.75 7 7.75 5C10.25 5 12 6.5 12 8.5Z");
}

.qwnsyymfm {
  d: path("M3 11h18c0 5.25-4 9-9 9s-9-3.75-9-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qwnsyymfm"/><path class="qu10e-b9u"/></g>`,
		"fallback": "uix-sharp:water-garden-bowl",
	});
}

export default Component;
