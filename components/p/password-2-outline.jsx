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
		"content": `<style>.ijy85dbxf {
  fill: currentColor;
  d: path("M4.405 12.635q-1.001 0-1.703-.705T2 10.218t.7-1.699t1.703-.692q1 0 1.703.696t.702 1.689q0 1.01-.701 1.716q-.701.707-1.702.707M3 18.23V17h18v1.23zm7.298-6.317q-.702-.7-.702-1.701t.701-1.703t1.702-.702t1.703.7t.702 1.702t-.701 1.703t-1.702.702t-1.703-.7m7.596 0q-.702-.701-.702-1.702q0-1.002.701-1.704q.701-.701 1.702-.701t1.703.7T22 10.21t-.7 1.703t-1.703.702q-1 0-1.703-.701");
}
</style><path class="ijy85dbxf"/>`,
		"fallback": "material-symbols-light:password-2-outline",
	});
}

export default Component;
