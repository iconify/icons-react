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
		"content": `<style>.xn7xu-bjt {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.805 8.995l-4.8-4.8Q13.761 2.95 12 2.95T8.995 4.195l-4.8 4.8Q2.95 10.239 2.95 12t1.245 3.005l4.8 4.8Q10.239 21.05 12 21.05t3.005-1.245l4.8-4.8Q21.05 13.761 21.05 12t-1.245-3.005M10.871 7.25h2.258q.931 0 1.59.659l1.372 1.372q.659.659.659 1.59v2.258q0 .931-.659 1.59l-1.372 1.372q-.659.659-1.59.659h-2.258q-.931 0-1.59-.659l-1.372-1.372q-.659-.659-.659-1.59v-2.258q0-.931.659-1.59l1.372-1.372q.659-.659 1.59-.659");
}
</style><path class="xn7xu-bjt"/>`,
		"fallback": "uix-solid:stop-ahead-sign",
	});
}

export default Component;
