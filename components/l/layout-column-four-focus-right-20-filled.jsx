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
		"content": `<style>.bw0p29lop {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h.5v12H6a2 2 0 0 1-2-2zm3.5 10V4H10v12zm6 0H11V4h2.5z");
}
</style><path class="bw0p29lop"/>`,
		"fallback": "fluent:layout-column-four-focus-right-20-filled",
	});
}

export default Component;
