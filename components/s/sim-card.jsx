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
		"content": `<style>.tc8r-qblw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.5 1.75h4.55q1.76 0 3.005 1.245l2.45 2.45Q19.75 6.69 19.75 8.45V18q0 1.76-1.245 3.005T15.5 22.25h-7q-1.76 0-3.005-1.245T4.25 18V6q0-1.76 1.245-3.005T8.5 1.75m4.875 7.5h-2.75q-3.375 0-3.375 3.375v3.25q0 3.375 3.375 3.375h2.75q3.375 0 3.375-3.375v-3.25q0-3.375-3.375-3.375");
}
</style><path class="tc8r-qblw"/>`,
		"fallback": "uix-solid:sim-card",
	});
}

export default Component;
