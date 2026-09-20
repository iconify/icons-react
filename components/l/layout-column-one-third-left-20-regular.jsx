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
		"content": `<style>.rvfgu9_pj {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h1v12H6a2 2 0 0 1-2-2zm4 10V4h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z");
}
</style><path class="rvfgu9_pj"/>`,
		"fallback": "fluent:layout-column-one-third-left-20-regular",
	});
}

export default Component;
