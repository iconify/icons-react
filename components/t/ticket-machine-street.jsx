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
		"content": `<style>.i6grag4gu {
  d: path("M8 5.5h8v5H8Zm8 7.5v2.5m-8.5-1h5v7h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ur4xyeb_e {
  d: path("M5 11.7V2.5h14v15h-3.7");
}
</style><g class="ulnmmdpxh"><path class="ur4xyeb_e"/><path class="i6grag4gu"/></g>`,
		"fallback": "uix-sharp:ticket-machine-street",
	});
}

export default Component;
