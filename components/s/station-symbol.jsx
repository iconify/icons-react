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
		"content": `<style>.dps9260it {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.25 4.5q0-2.75 2.75-2.75t2.75 2.75T12 7.25T9.25 4.5m1.75 4q-1.76 0-3.005 1.245T6.75 12.75V18q0 1.76 1.245 3.005T11 22.25h2q1.76 0 3.005-1.245T17.25 18v-5.25q0-1.76-1.245-3.005T13 8.5z");
}
</style><path class="dps9260it"/>`,
		"fallback": "uix-solid:station-symbol",
	});
}

export default Component;
