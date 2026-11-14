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
		"content": `<style>.avm4l0i-o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.25 5.5q0-3.75 3.75-3.75t3.75 3.75q0 2.101-1.177 3.025l2.725 5.841q.543-.116 1.202-.116q3.75 0 3.75 3.75t-3.75 3.75T14.75 18q0-2.101 1.177-3.025l-2.725-5.841q-.543.116-1.202.116t-1.202-.116l-2.725 5.841Q9.25 15.899 9.25 18q0 3.75-3.75 3.75T1.75 18t3.75-3.75q.659 0 1.202.116l2.725-5.841Q8.25 7.601 8.25 5.5");
}
</style><path class="avm4l0i-o"/>`,
		"fallback": "uix-solid:number-bonds",
	});
}

export default Component;
