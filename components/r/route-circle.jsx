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
		"content": `<style>.umx70y6fl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.163 6.614q-1.546.516-2.79 1.759Q3.25 10.497 3.25 13.5t2.123 5.127T10.5 20.75t5.127-2.123q2.015-2.016 2.118-4.825Q14.5 10.46 14.5 7.5q0-4 4-4t4 4q0 2.964-3.255 6.312q-.106 3.424-2.558 5.875q-2.563 2.563-6.187 2.563t-6.187-2.563T1.75 13.5t2.563-6.187q1.636-1.637 3.706-2.228Q8.217 3 10.5 3Q13 3 13 5.5T10.5 8Q8.639 8 8.163 6.614");
}
</style><path class="umx70y6fl"/>`,
		"fallback": "uix-solid:route-circle",
	});
}

export default Component;
