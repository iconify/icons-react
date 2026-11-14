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
		"content": `<style>.k275457uo {
  d: path("M8 15.5V5l7.5-2v10M3 15.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.tm3x-8s-b {
  d: path("M10.5 13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm4.5 8.75h7L18.5 14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k275457uo"/><path class="tm3x-8s-b"/></g>`,
		"fallback": "uix-sharp:party-music",
	});
}

export default Component;
