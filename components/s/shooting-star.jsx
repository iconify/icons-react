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
		"content": `<style>.t0hlpl0tn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.31 3.99l1.03 2.51q.31.73 1.1.8l2.71.21q.79.06.19.58l-2.07 1.76q-.61.52-.42 1.29l.64 2.64q.18.78-.5.36l-2.31-1.42q-.68-.42-1.36 0l-2.31 1.42q-.68.42-.5-.36l.64-2.64q.19-.77-.42-1.29L9.66 8.09q-.6-.52.19-.58l2.71-.21q.79-.07 1.1-.8l1.03-2.51q.31-.74.62 0M3 21l6-6m-6.25.25l4-4m2 10L12 18");
}
</style><path class="t0hlpl0tn"/>`,
		"fallback": "iconoven:shooting-star",
	});
}

export default Component;
