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
		"content": `<style>.obcntljhj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 12.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x1c2bobhh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 8.75v-4h9v4m-12 0h14v10.5h-14zm14 2h4.5v6.5h-4.5z");
}
</style><g class="ux2u0rbkq"><path class="x1c2bobhh"/><path class="obcntljhj"/></g>`,
		"fallback": "iconoven:video-camera-sharp",
	});
}

export default Component;
