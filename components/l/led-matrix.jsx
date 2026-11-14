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
		"content": `<style>.xp0o-bcul {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.625 2.25h-9.25q-2.123 0-3.624 1.501T2.25 7.375v9.25q0 2.123 1.501 3.624t3.624 1.501h9.25q2.123 0 3.624-1.501t1.501-3.624v-9.25q0-2.123-1.501-3.624T16.625 2.25M7.5 6Q9 6 9 7.5T7.5 9T6 7.5T7.5 6m6 1.5Q13.5 9 12 9t-1.5-1.5T12 6t1.5 1.5m3-1.5Q18 6 18 7.5T16.5 9T15 7.5T16.5 6M9 12q0 1.5-1.5 1.5T6 12t1.5-1.5T9 12m3-1.5q1.5 0 1.5 1.5T12 13.5T10.5 12t1.5-1.5m6 1.5q0 1.5-1.5 1.5T15 12t1.5-1.5T18 12M7.5 15Q9 15 9 16.5T7.5 18T6 16.5T7.5 15m6 1.5q0 1.5-1.5 1.5t-1.5-1.5T12 15t1.5 1.5m3-1.5q1.5 0 1.5 1.5T16.5 18T15 16.5t1.5-1.5");
}
</style><path class="xp0o-bcul"/>`,
		"fallback": "uix-solid:led-matrix",
	});
}

export default Component;
