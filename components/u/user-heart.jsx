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
		"content": `<style>.q7hvrzg2q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.818 5.068Q4.5 6.386 4.5 8.25t1.318 3.182T9 12.75t3.182-1.318T13.5 8.25t-1.318-3.182T9 3.75T5.818 5.068m12.266 9.306Q14.75 12.151 14.75 9.5q0-2.5 2.5-2.5q.741 0 1.25.357Q19.009 7 19.75 7q2.5 0 2.5 2.5q0 2.651-3.334 4.874q-.092.062-.199.094q-.106.032-.217.032t-.217-.032t-.199-.094M1.75 20q0-2.427 2.213-4.015Q6.03 14.5 9 14.5t5.037 1.485Q16.25 17.573 16.25 20q0 1.75-1.75 1.75h-11q-1.75 0-1.75-1.75");
}
</style><path class="q7hvrzg2q"/>`,
		"fallback": "uix-solid:user-heart",
	});
}

export default Component;
