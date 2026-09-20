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
		"content": `<style>.as7-5wfpf {
  fill: currentColor;
  d: path("M11 21v-7.975q-1.6 0-3.075-.612t-2.6-1.738t-1.725-2.6T3 5V3h2q1.575 0 3.05.613t2.6 1.737q.775.775 1.288 1.7t.787 1.975q.125-.175.275-.337t.325-.338q1.125-1.125 2.6-1.737T19 6h2v2q0 1.6-.612 3.075t-1.738 2.6t-2.587 1.725T13 16v5z");
}
</style><path class="as7-5wfpf"/>`,
		"fallback": "material-symbols:psychiatry",
	});
}

export default Component;
