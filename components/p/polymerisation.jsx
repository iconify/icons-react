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
		"content": `<style>.yf5phacrh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 8.75h.5q2.613 0 3.125 2.1q.512-2.1 3.125-2.1h.5q2.613 0 3.125 2.1q.512-2.1 3.125-2.1h.5q1.346 0 2.298.952T22.25 12q0 3.25-3.25 3.25h-.5q-2.613 0-3.125-2.1q-.512 2.1-3.125 2.1h-.5q-2.613 0-3.125-2.1q-.512 2.1-3.125 2.1H5q-3.25 0-3.25-3.25q0-1.346.952-2.298T5 8.75");
}
</style><path class="yf5phacrh"/>`,
		"fallback": "uix-solid:polymerisation",
	});
}

export default Component;
