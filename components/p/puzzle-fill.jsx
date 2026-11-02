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
		"content": `<style>.zh0l2rb_z {
  fill: currentColor;
  d: path("M17.237 6H19a3 3 0 0 1 3 3v3a1 1 0 0 1-1.447.894A1.237 1.237 0 0 0 18.764 14a1.232 1.232 0 0 0 1.789 1.106A1 1 0 0 1 22 16v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1.763a3.238 3.238 0 0 1 0-6.474V9a3 3 0 0 1 3-3h1.763a3.238 3.238 0 0 1 6.474 0");
}
</style><path class="zh0l2rb_z"/>`,
		"fallback": "coolicons:puzzle-fill",
	});
}

export default Component;
