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
		"content": `<style>.g2cb7ox5r {
  fill: currentColor;
  d: path("M8.885 18.116v-1.231h5.384q.27 0 .443-.174t.173-.442v-3.038q0-.27-.173-.442t-.443-.173H8.885V5.885h7.23v1.23h-6v4.27H14.5q.671 0 1.143.472T16.115 13v3.27q0 .769-.538 1.307t-1.308.539z");
}
</style><path class="g2cb7ox5r"/>`,
		"fallback": "material-symbols-light:timer-5-shutter",
	});
}

export default Component;
