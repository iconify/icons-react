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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pk93r-bap {
  d: path("M10 2.75h4q.75 0 1.21.59l.83 1.07q.46.59-.1 1.09l-3.38 3q-.56.5-1.12 0l-3.38-3q-.56-.5-.1-1.09l.83-1.07q.46-.59 1.21-.59");
}

.xgt97b4ir {
  d: path("M5.75 15a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0");
}
</style><g class="hntgybcog"><path class="xgt97b4ir"/><path class="pk93r-bap"/></g>`,
		"fallback": "iconoven:ring-jewel",
	});
}

export default Component;
