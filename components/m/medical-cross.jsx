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
		"content": `<style>.dnrbzlb4s {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11 2.75h2q1.036 0 1.768.732T15.5 5.25V7.5q0 1 1 1h2.25q2.5 0 2.5 2.5v2q0 2.5-2.5 2.5H16.5q-1 0-1 1v2.25q0 2.5-2.5 2.5h-2q-2.5 0-2.5-2.5V16.5q0-.414-.293-.707T7.5 15.5H5.25q-2.5 0-2.5-2.5v-2q0-2.5 2.5-2.5H7.5q.414 0 .707-.293T8.5 7.5V5.25q0-2.5 2.5-2.5");
}
</style><path class="dnrbzlb4s"/>`,
		"fallback": "uix-solid:medical-cross",
	});
}

export default Component;
