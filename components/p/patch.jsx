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
		"content": `<style>.zyl_zvb-v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.41 8.286q.658-.658 1.59-.658t1.591.66l2.121 2.121q.66.659.66 1.591t-.658 1.59l3.18-3.181q1.099-1.098 1.099-2.652q0-1.553-1.099-2.651q-1.098-1.099-2.652-1.099q-1.553 0-2.651 1.099zM8.287 10.41l-3.181 3.181q-1.099 1.098-1.099 2.651q0 1.554 1.099 2.652t2.651 1.099q1.554 0 2.652-1.099l3.182-3.181q-.659.659-1.591.659t-1.591-.66l-2.121-2.121q-.66-.659-.66-1.591t.659-1.59");
}
</style><path class="zyl_zvb-v"/>`,
		"fallback": "uix-solid:patch",
	});
}

export default Component;
