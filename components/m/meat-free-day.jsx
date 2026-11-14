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
		"content": `<style>.qcw5wwb5t {
  d: path("M3.5 4.5h17V21h-17Zm4.5-2v4m8-4v4m-12.5 3h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zkeiqhgjq {
  d: path("M8.5 18.25c0-4.25 2.5-6 7.25-6c0 4.25-2.75 6-7.25 6Z");
}
</style><g class="ulnmmdpxh"><path class="qcw5wwb5t"/><path class="zkeiqhgjq"/></g>`,
		"fallback": "uix-sharp:meat-free-day",
	});
}

export default Component;
