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
		"content": `<style>.g9ahx9bqo {
  d: path("M7 8V3.5h10V8M3 8h18v9H3Z");
}

.qehun0bnj {
  d: path("M7 14v6.5h7.5L17 18v-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g9ahx9bqo"/><path class="qehun0bnj"/></g>`,
		"fallback": "uix-sharp:lab-label-printer",
	});
}

export default Component;
