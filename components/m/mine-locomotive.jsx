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
		"content": `<style>.k59f8otot {
  d: path("M3 16.5V4h7.5v5h9v7.5Z");
}

.kvb76bb7q {
  d: path("M19.5 14.5h2v-1.75");
}

.m3obu68wr {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2 20.5h20");
}

.rslmcbbpr {
  fill: currentColor;
  d: path("M15.25 12.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k59f8otot"/><path class="m3obu68wr"/><path class="rslmcbbpr"/><path class="kvb76bb7q"/></g>`,
		"fallback": "uix-sharp:mine-locomotive",
	});
}

export default Component;
