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
		"content": `<style>.h0jhiobyd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.125 3.75H6.875q-2.123 0-3.624 1.501T1.75 8.875v6.25q0 2.123 1.501 3.624t3.624 1.501h10.25q2.123 0 3.624-1.501t1.501-3.624v-6.25q0-2.123-1.501-3.624T17.125 3.75m-3.375 7h3q1.036 0 1.768.732t.732 1.768v1.5q0 1.036-.732 1.768t-1.768.732h-3q-2.5 0-2.5-2.5v-1.5q0-2.5 2.5-2.5");
}
</style><path class="h0jhiobyd"/>`,
		"fallback": "uix-solid:picture-in-picture",
	});
}

export default Component;
