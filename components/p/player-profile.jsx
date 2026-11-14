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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yfwb6bc8j {
  d: path("M8.75 9a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM7.5 21.5c0-4.5 2-6.25 4.5-6.25s4.5 1.75 4.5 6.25");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="yfwb6bc8j"/></g>`,
		"fallback": "uix-sharp:player-profile",
	});
}

export default Component;
