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
		"content": `<style>.zb9ydcv-p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 2.25h-3.5q-2.5 0-2.5 2.5v5q0 1.036.732 1.768t1.768.732h3.5q2.5 0 2.5-2.5v-5q0-2.5-2.5-2.5m6.5 9.5h3.5q2.5 0 2.5 2.5v5q0 1.036-.732 1.768t-1.768.732h-3.5q-1.036 0-1.768-.732t-.732-1.768v-5q0-2.5 2.5-2.5");
}
</style><path class="zb9ydcv-p"/>`,
		"fallback": "uix-solid:starting-grid",
	});
}

export default Component;
