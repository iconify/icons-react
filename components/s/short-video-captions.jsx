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
		"content": `<style>.g95l94box {
  d: path("m12.567 7.506l.748.486a1.5 1.5 0 0 1 0 2.516l-.748.486a1.5 1.5 0 0 1-2.317-1.258v-.972a1.5 1.5 0 0 1 2.317-1.258M8 15.5h8m-6.5 3h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sqgzs9b2w {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5");
}
</style><g class="hntgybcog"><path class="sqgzs9b2w"/><path class="g95l94box"/></g>`,
		"fallback": "uix:short-video-captions",
	});
}

export default Component;
