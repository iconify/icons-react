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
		"content": `<style>.innil8rbj {
  d: path("M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqrmy4bau {
  d: path("M4.5 6h15v12h-15Zm0 2.5h-2v7h2m15-7h2v7h-2");
}
</style><g class="ulnmmdpxh"><path class="xqrmy4bau"/><path class="innil8rbj"/></g>`,
		"fallback": "uix-sharp:underwater-camera",
	});
}

export default Component;
