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
		"content": `<style>.ipi2ayb8t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 7.75h1q1.76 0 3.005 1.245q.258.258.463.538q1.532-1.157 3.064 0q.205-.28.463-.538Q15.24 7.75 17 7.75h1q1.76 0 3.005 1.245T22.25 12t-1.245 3.005T18 16.25h-1q-1.76 0-3.005-1.245T12.75 12q0-.556.124-1.06q-.874-.789-1.748 0q.124.504.124 1.06q0 1.76-1.245 3.005T7 16.25H6q-1.76 0-3.005-1.245T1.75 12t1.245-3.005T6 7.75");
}
</style><path class="ipi2ayb8t"/>`,
		"fallback": "uix-solid:pin-optician",
	});
}

export default Component;
