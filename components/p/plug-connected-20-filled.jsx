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
		"content": `<style>.u3_vg_b_v {
  fill: currentColor;
  d: path("M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.446 2.445a4.04 4.04 0 0 0-5.128.481l-.3.3a1.49 1.49 0 0 0 0 2.108l3.6 3.6a1.49 1.49 0 0 0 2.107 0l.3-.3a4.04 4.04 0 0 0 .482-5.128zM7.554 8.846a1.49 1.49 0 0 0-2.107 0l-.3.3a4.04 4.04 0 0 0-.481 5.128L2.22 16.72a.75.75 0 1 0 1.06 1.06l2.446-2.446a4.04 4.04 0 0 0 5.128-.48l.3-.3a1.49 1.49 0 0 0 0-2.108z");
}
</style><path class="u3_vg_b_v"/>`,
		"fallback": "fluent:plug-connected-20-filled",
	});
}

export default Component;
