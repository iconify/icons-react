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
		"content": `<style>.th8xrlb3y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.25 7.75h1q2.5 0 2.5 2.5v1H9v-1q0-2.5 2.5-2.5h1q1.036 0 1.768.732T15 10.25v1h1.25v-1q0-2.5 2.5-2.5h1q1.036 0 1.768.732t.732 1.768v3.5q0 1.036-.732 1.768t-1.768.732h-1q-1.036 0-1.768-.732t-.732-1.768v-1H15v1q0 1.036-.732 1.768t-1.768.732h-1q-1.036 0-1.768-.732T9 13.75v-1H7.75v1q0 1.036-.732 1.768t-1.768.732h-1q-1.036 0-1.768-.732T1.75 13.75v-3.5q0-1.036.732-1.768T4.25 7.75");
}
</style><path class="th8xrlb3y"/>`,
		"fallback": "uix-solid:prompt-chain",
	});
}

export default Component;
