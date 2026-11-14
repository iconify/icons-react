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
		"content": `<style>.iu3neyp7w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.75 5q0-3.25 3.25-3.25T9.25 5q0 2.85-2.5 3.201V9.5h7.049Q14.15 7 17 7q3.25 0 3.25 3.25T17 13.5q-2.85 0-3.201-2.5H6.75v5q0 1.25 1.25 1.25h5.799q.351-2.5 3.201-2.5q3.25 0 3.25 3.25T17 21.25q-2.85 0-3.201-2.5H8q-2.75 0-2.75-2.75V8.201Q2.75 7.85 2.75 5");
}
</style><path class="iu3neyp7w"/>`,
		"fallback": "uix-solid:org-tree",
	});
}

export default Component;
