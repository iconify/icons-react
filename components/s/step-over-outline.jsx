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
		"content": `<style>.cqhrqq1_x {
  fill: currentColor;
  d: path("M10.23 17.77Q9.5 17.037 9.5 16t.73-1.77T12 13.5t1.77.73t.73 1.77t-.73 1.77t-1.77.73t-1.77-.73M5.19 11.5q.504-2.379 2.389-3.94T11.975 6q1.864 0 3.394.891q1.531.892 2.458 2.34V5.885h1V11.5h-5.616v-1h4.239q-.723-1.561-2.172-2.53Q13.828 7 12 7Q9.916 7 8.317 8.28Q6.72 9.563 6.215 11.5z");
}
</style><path class="cqhrqq1_x"/>`,
		"fallback": "material-symbols-light:step-over-outline",
	});
}

export default Component;
