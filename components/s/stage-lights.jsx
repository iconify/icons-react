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
		"content": `<style>.lp6c1wrmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.5h18.5M7 3.5v3m10-3v3m-10.9 0h1.8q.6 0 .73.59l.74 3.32q.13.59-.47.59H5.1q-.6 0-.47-.59l.74-3.32q.13-.59.73-.59m10 0h1.8q.6 0 .73.59l.74 3.32q.13.59-.47.59h-3.8q-.6 0-.47-.59l.74-3.32q.13-.59.73-.59M4.75 14L3.5 21.25M9.25 14l1.25 7.25M14.75 14l-1.25 7.25M19.25 14l1.25 7.25");
}
</style><path class="lp6c1wrmo"/>`,
		"fallback": "iconoven:stage-lights",
	});
}

export default Component;
