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
		"content": `<style>.n1mp-2blh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.75 2.75h.5q1.036 0 1.768.732t.732 1.768v13.5q0 1.036-.732 1.768t-1.768.732h-.5q-2.5 0-2.5-2.5V5.25q0-2.5 2.5-2.5m-6.5 7h-.5q-2.5 0-2.5 2.5v6.5q0 2.5 2.5 2.5h.5q2.5 0 2.5-2.5v-6.5q0-2.5-2.5-2.5m-7.5 6h.5q2.5 0 2.5 2.5v.5q0 2.5-2.5 2.5h-.5q-2.5 0-2.5-2.5v-.5q0-2.5 2.5-2.5");
}
</style><path class="n1mp-2blh"/>`,
		"fallback": "uix-solid:priority-low",
	});
}

export default Component;
