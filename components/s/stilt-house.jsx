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

.rlt3v3_6z {
  d: path("M10.5 13.5V10h3v3.5m-7 .5v7.25M12 14v7.25M17.5 14v7.25m-14.75-3c1.156 0 1.156-1 2.313-1s1.156 1 2.312 1s1.156-1 2.313-1s1.156 1 2.312 1s1.156-1 2.313-1s1.156 1 2.312 1s1.156-1 2.313-1s1.156 1 2.312 1");
}

.yu84ki6ve {
  d: path("M4.5 12.9V8.85q0-.6.49-.94l6.52-4.57q.49-.34.98 0l6.52 4.57q.49.34.49.94v4.05q0 .6-.6.6H5.1q-.6 0-.6-.6");
}
</style><g class="hntgybcog"><path class="yu84ki6ve"/><path class="rlt3v3_6z"/></g>`,
		"fallback": "iconoven:stilt-house",
	});
}

export default Component;
