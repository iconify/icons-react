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
		"content": `<style>.sxsxtbbwk {
  fill: currentColor;
  d: path("m18.35 10.1l-1.4-1.45l2.15-2.1l1.4 1.4zM2 20v-2h20v2zm9-13V4h2v3zm-5.35 3.05L3.55 7.9l1.4-1.4L7.1 8.65zM5 16q0-2.925 2.038-4.962T12 9t4.963 2.038T19 16z");
}
</style><path class="sxsxtbbwk"/>`,
		"fallback": "material-symbols:wb-twilight-sharp",
	});
}

export default Component;
