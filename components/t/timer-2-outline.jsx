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
		"content": `<style>.t1eflcb7e {
  fill: currentColor;
  d: path("M8.5 18.116V13.23q0-.77.539-1.308t1.307-.538h4.308q.269 0 .442-.174q.173-.173.173-.442V7.731q0-.27-.173-.442q-.173-.173-.442-.173H8.5V5.885h6.154q.769 0 1.308.538t.538 1.308v3.038q0 .77-.538 1.308t-1.308.539h-4.308q-.269 0-.442.173t-.173.442v3.654H16.5v1.23z");
}
</style><path class="t1eflcb7e"/>`,
		"fallback": "material-symbols-light:timer-2-outline",
	});
}

export default Component;
