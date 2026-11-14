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
		"content": `<style>.hiv9epb0c {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.125 5.75h-4.25q-2.123 0-3.624 1.501T1.75 10.875v2.25q0 2.123 1.501 3.624t3.624 1.501h4.25q2.123 0 3.624-1.501q.92-.92 1.276-2.074l2.841 1.657q1.125.656 2.255.007q1.129-.648 1.129-1.951V9.612q0-1.303-1.129-1.951t-2.255.007l-2.841 1.657q-.356-1.154-1.276-2.074q-1.501-1.501-3.624-1.501");
}
</style><path class="hiv9epb0c"/>`,
		"fallback": "uix-solid:meeting-camera",
	});
}

export default Component;
