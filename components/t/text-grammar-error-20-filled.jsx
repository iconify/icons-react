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
		"content": `<style>.gbw_lm_mf {
  fill: currentColor;
  d: path("M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h9.456A5.5 5.5 0 0 1 14.5 9a5.5 5.5 0 0 1 2.294.5h.456a.75.75 0 0 0 0-1.5zm0 3h7.507a5.5 5.5 0 0 0-.882 1.5H2.75a.75.75 0 0 1 0-1.5m0 3h6.272a5.6 5.6 0 0 0 .069 1.5H2.75a.75.75 0 0 1 0-1.5m16.25.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25");
}
</style><path class="gbw_lm_mf"/>`,
		"fallback": "fluent:text-grammar-error-20-filled",
	});
}

export default Component;
