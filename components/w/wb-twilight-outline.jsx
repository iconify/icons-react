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
		"content": `<style>.scgptnolz {
  fill: currentColor;
  d: path("m18.35 10.1l-1.4-1.45l2.15-2.1l1.4 1.4zM2 20v-2h20v2zm9-13V4h2v3zm-5.35 3.05L3.55 7.9l1.4-1.4L7.1 8.65zM7.425 14h9.15q-.575-1.35-1.8-2.175T12 11t-2.775.825T7.425 14M5 16q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16zm7-2");
}
</style><path class="scgptnolz"/>`,
		"fallback": "material-symbols:wb-twilight-outline",
	});
}

export default Component;
