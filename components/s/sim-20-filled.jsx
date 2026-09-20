import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bm_h2tdcq {
  fill: currentColor;
  d: path("M4 5a3 3 0 0 1 3-3h3.464a3 3 0 0 1 2.122.879l2.535 2.535A3 3 0 0 1 16 7.536V15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3 5.5v.5h3V9H8.5A1.5 1.5 0 0 0 7 10.5M7 12v1.5A1.5 1.5 0 0 0 8.5 15H10v-3zm4.5 3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 9H11v6z");
}
</style><path class="bm_h2tdcq"/>`,
		"fallback": "fluent:sim-20-filled",
	});
}

export default Component;
