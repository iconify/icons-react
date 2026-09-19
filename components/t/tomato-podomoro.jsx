import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oy3dzt2la {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.816 19.743c5 0 7-2.993 7-4.993c0 2 2 4.993 7 4.993c-4-7.003-10-7-14 0");
}

.p6yqtkbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.316 16.25c-14.5 10-2.5 25 9.5 25c13 0 24-15 10-25m-9.95-3.779c0-2.334 2.033-5.052 4.561-5.052m-1.611 5.321c2.5-2 5.25-2.5 9.5-1.5c-1.5 1.5-2.75 3.25-6 4c-1.25-1.75-2.25-2-3.5-2.5m-6 0c-2.5-2-5.25-2.5-9.5-1.5c1.5 1.5 2.75 3.25 6 4c1.25-1.75 2.25-2 3.5-2.5");
}
</style><path class="p6yqtkbpv"/><path class="oy3dzt2la"/>`,
		"fallback": "arcticons:tomato-podomoro",
	});
}

export default Component;
