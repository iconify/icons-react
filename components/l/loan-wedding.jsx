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
		"content": `<style>.jn9dktblk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.934 7.934Q3.25 9.618 3.25 12t1.684 4.066T9 17.75q1.672 0 3-.83q1.328.83 3 .83q2.382 0 4.066-1.684T20.75 12t-1.684-4.066T15 6.25q-1.672 0-3 .83q-1.328-.83-3-.83q-2.382 0-4.066 1.684");
}
</style><path class="jn9dktblk"/>`,
		"fallback": "uix-solid:loan-wedding",
	});
}

export default Component;
