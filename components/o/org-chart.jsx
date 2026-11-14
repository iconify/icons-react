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
		"content": `<style>.vuv-05s4g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 5.5q0-3.25 3.25-3.25t3.25 3.25q0 2.85-2.5 3.201v2.549H17q2.25 0 2.25 2.25v1.331q.873.196 1.548.871q.952.952.952 2.298t-.952 2.298t-2.298.952q-3.25 0-3.25-3.25q0-2.85 2.5-3.201V13.5q0-.75-.75-.75H7q-.75 0-.75.75v1.299q2.5.351 2.5 3.201q0 3.25-3.25 3.25T2.25 18q0-2.85 2.5-3.201V13.5q0-2.25 2.25-2.25h4.25V8.701Q8.75 8.35 8.75 5.5");
}
</style><path class="vuv-05s4g"/>`,
		"fallback": "uix-solid:org-chart",
	});
}

export default Component;
