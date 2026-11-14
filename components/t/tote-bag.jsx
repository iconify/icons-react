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
		"content": `<style>.b243z8p2l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.25 7.25h5.5V6q0-1.139-.805-1.945Q13.139 3.25 12 3.25Q9.25 3.25 9.25 6zm7 0h1.423q1.472 0 2.473 1.078q1.002 1.079.893 2.546l-.611 8.25q-.232 3.126-3.366 3.126H6.938q-3.134 0-3.366-3.126l-.611-8.25q-.109-1.467.893-2.546Q4.855 7.25 6.327 7.25H7.75V6q0-1.76 1.245-3.005T12 1.75t3.005 1.245T16.25 6z");
}
</style><path class="b243z8p2l"/>`,
		"fallback": "uix-solid:tote-bag",
	});
}

export default Component;
