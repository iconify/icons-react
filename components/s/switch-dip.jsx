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
		"content": `<style>.jcpuhxbtd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 5.25h-11q-1.76 0-3.005 1.245T2.25 9.5v5q0 1.76 1.245 3.005T6.5 18.75h11q1.76 0 3.005-1.245T21.75 14.5v-5q0-1.76-1.245-3.005T17.5 5.25m-9.75 2.5q2 0 2 2v4.5q0 .828-.586 1.414t-1.414.586t-1.414-.586t-.586-1.414v-4.5q0-2 2-2m6.25 2v4.5q0 .828-.586 1.414T12 16.25t-1.414-.586T10 14.25v-4.5q0-2 2-2t2 2m2.25-2q2 0 2 2v4.5q0 .828-.586 1.414t-1.414.586t-1.414-.586t-.586-1.414v-4.5q0-2 2-2");
}
</style><path class="jcpuhxbtd"/>`,
		"fallback": "uix-solid:switch-dip",
	});
}

export default Component;
