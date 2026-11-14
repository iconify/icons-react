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
		"content": `<style>.pi31a4bpx {
  d: path("M2.5 2.5h19v14h-19Z");
}

.qqlr_acxo {
  d: path("M2.5 13L8 7.5l8.5 8.5m-2.25-8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM6 20.5h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pi31a4bpx"/><path class="qqlr_acxo"/></g>`,
		"fallback": "uix-sharp:post-alt-text",
	});
}

export default Component;
