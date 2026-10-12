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
		"content": `<style>.njq3a580y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.87 11.31l3.83-3.45q.74-.67 1.24.2l2.25 3.88q.5.87-.45 1.18l-4.91 1.59q-.95.31-1.45-.56l-.75-1.3q-.5-.87.24-1.54m2.28-2.07l2.62 4.52M8 15v5m4-6.3V20m-7 0h8m1.16-14.1L17 3.07M15.66 8.5l3.46-2m-1.96 4.6L21 10.06");
}
</style><path class="njq3a580y"/>`,
		"fallback": "iconoven:spotlight-star",
	});
}

export default Component;
