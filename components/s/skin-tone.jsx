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
		"content": `<style>.zuzor9b7v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.25 8q-4 0-4 4t4 4q1.354 0 2.25-.459q.896.459 2.25.459t2.25-.458q.896.458 2.25.458t2.25-.458q.896.458 2.25.458q4 0 4-4t-4-4q-1.354 0-2.25.459Q15.604 8 14.25 8T12 8.458Q11.104 8 9.75 8t-2.25.458Q6.604 8 5.25 8");
}
</style><path class="zuzor9b7v"/>`,
		"fallback": "uix-solid:skin-tone",
	});
}

export default Component;
