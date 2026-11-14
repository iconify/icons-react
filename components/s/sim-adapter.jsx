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
		"content": `<style>.onm1e46ab {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13.05 1.75H8q-1.76 0-3.005 1.245T3.75 6v12q0 1.76 1.245 3.005T8 22.25h8q1.76 0 3.005-1.245T20.25 18V8.95q0-1.76-1.245-3.005l-2.95-2.95Q14.81 1.75 13.05 1.75m-3.8 8.5h2.525q1.036 0 1.769.733l1.973 1.974q.733.732.733 1.768v2.025q0 1.036-.732 1.768t-1.768.732h-4.5q-1.036 0-1.768-.732T6.75 16.75v-4q0-2.5 2.5-2.5");
}
</style><path class="onm1e46ab"/>`,
		"fallback": "uix-solid:sim-adapter",
	});
}

export default Component;
