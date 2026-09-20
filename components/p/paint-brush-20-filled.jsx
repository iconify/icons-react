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
		"content": `<style>.m21j1ubzk {
  fill: currentColor;
  d: path("M10 4.499v-2.5H5.5a.5.5 0 0 0-.5.5v6.5h10V2.5a.5.5 0 0 0-.5-.5H13v3.502a.5.5 0 0 1-1 0V2h-1v2.5a.5.5 0 0 1-1 0m5 5.5H5v1.004a2 2 0 0 0 2 2h1.5v3.498a1.5 1.5 0 1 0 3 0v-3.498H13a2 2 0 0 0 2-2z");
}
</style><path class="m21j1ubzk"/>`,
		"fallback": "fluent:paint-brush-20-filled",
	});
}

export default Component;
