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
		"content": `<style>.bs1qy9bkn {
  fill: currentColor;
  d: path("m6.73 19.02l1.347-3.347q.129-.287.389-.47q.259-.184.576-.184H11.5v-4.813q-3.421-.067-5.74-.856T3.443 7.5q0-1.142 2.483-1.927Q8.408 4.789 12 4.789q3.598 0 6.078.784q2.48.785 2.48 1.927q0 1.08-2.328 1.86q-2.328.779-5.73.846v4.813h2.458q.311 0 .574.184t.391.47l1.346 3.346h-1.038l-1.2-3H8.969l-1.2 3z");
}
</style><path class="bs1qy9bkn"/>`,
		"fallback": "material-symbols-light:table-bar",
	});
}

export default Component;
