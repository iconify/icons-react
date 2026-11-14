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
		"content": `<style>.j_krs-dtn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.25 5.25h-8.5q-2.485 0-4.243 1.757Q1.75 8.765 1.75 11.25v1.5q0 2.485 1.757 4.243Q5.265 18.75 7.75 18.75h8.5q2.485 0 4.243-1.757q1.757-1.758 1.757-4.243v-1.5q0-2.485-1.757-4.243Q18.735 5.25 16.25 5.25");
}
</style><path class="j_krs-dtn"/>`,
		"fallback": "uix-solid:switch-control",
	});
}

export default Component;
