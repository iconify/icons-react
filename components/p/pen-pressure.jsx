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
		"content": `<style>.bwk5dgk7w {
  d: path("m20.48 5.99l-2.47-2.47q-.71-.71-1.42 0l-.35.35q-.71.71 0 1.42l2.47 2.47q.71.71 1.42 0l.35-.35q.71-.71 0-1.42");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.usfynzf3s {
  d: path("m18.71 7.76l-2.47-2.47q-.71-.71-1.42 0L7.41 12.7q-.71.71-1.06 1.65l-1.6 4.31q-.35.94.59.59l4.31-1.6q.94-.35 1.65-1.06l7.41-7.41q.71-.71 0-1.42m-8.12 9.54L6.7 13.41");
}
</style><g class="hntgybcog"><path class="bwk5dgk7w"/><path class="usfynzf3s"/></g>`,
		"fallback": "iconoven:pen-pressure",
	});
}

export default Component;
