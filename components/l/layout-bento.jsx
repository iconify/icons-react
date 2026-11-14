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
		"content": `<style>.i502lotyu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.5 2.25h-4q-1.76 0-3.005 1.245T2.25 6.5V7q0 1.76 1.245 3.005T6.5 11.25h4q1.76 0 3.005-1.245T14.75 7v-.5q0-1.76-1.245-3.005T10.5 2.25m8.5 0q2.75 0 2.75 2.75v3.5q0 2.75-2.75 2.75T16.25 8.5V5q0-2.75 2.75-2.75M7.75 15.5q0-2.75-2.75-2.75q-1.139 0-1.945.805q-.805.806-.805 1.945V19q0 2.75 2.75 2.75T7.75 19zm5.75-2.75h4q1.76 0 3.005 1.245T21.75 17v.5q0 1.76-1.245 3.005T17.5 21.75h-4q-1.76 0-3.005-1.245T9.25 17.5V17q0-1.76 1.245-3.005T13.5 12.75");
}
</style><path class="i502lotyu"/>`,
		"fallback": "uix-solid:layout-bento",
	});
}

export default Component;
