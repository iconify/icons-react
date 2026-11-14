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
		"content": `<style>.c7_b7vbfy {
  d: path("M8.5 15.5c1.5 1 3.5 1 5 0");
}

.f-4we1bzl {
  d: path("M2.75 12.75a8.25 8.25 0 1 0 16.5 0a8.25 8.25 0 1 0-16.5 0ZM8 11h.01M14 11h.01");
}

.f0u5he6bc {
  fill: currentColor;
  d: path("M20.25 4c1 1.25 1.5 2 1.5 2.75s-.65 1.5-1.5 1.5s-1.5-.75-1.5-1.5s.5-1.5 1.5-2.75Zm.5 7c.75 1 1 1.5 1 2.25c0 .5-.5 1-1 1s-1-.5-1-1c0-.75.25-1.25 1-2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f-4we1bzl"/><path class="c7_b7vbfy"/><path class="f0u5he6bc"/></g>`,
		"fallback": "uix-sharp:sweating",
	});
}

export default Component;
