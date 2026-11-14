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
		"content": `<style>.nk5o7ccwq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 3.75H6q-1.76 0-3.005 1.245T1.75 8v8q0 1.76 1.245 3.005T6 20.25h12q1.76 0 3.005-1.245T22.25 16V8q0-1.76-1.245-3.005T18 3.75M4.5 15q0-1.036.732-1.768q.732-.733 1.768-.733t1.768.733T9.5 15q.001 1.036-.732 1.768q-.732.733-1.768.733t-1.768-.733Q4.5 16.036 4.5 15");
}
</style><path class="nk5o7ccwq"/>`,
		"fallback": "uix-solid:negative-space",
	});
}

export default Component;
