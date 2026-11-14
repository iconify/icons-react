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
		"content": `<style>.r5lp6qbnp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.5 2.25h7q3.25 0 3.25 3.25v2.75h2.75q1.346 0 2.298.952t.952 2.298v7q0 1.346-.952 2.298t-2.298.952h-7q-1.346 0-2.298-.952T8.25 18.5v-2.75H5.5q-3.25 0-3.25-3.25v-7q0-1.346.952-2.298T5.5 2.25");
}
</style><path class="r5lp6qbnp"/>`,
		"fallback": "uix-solid:shape-union",
	});
}

export default Component;
