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
		"content": `<style>.zrsy49b1b {
  fill: currentColor;
  d: path("M3 19v-1h16.385q.23 0 .423-.192t.192-.424V5h1v12.385q0 .69-.462 1.153T19.385 19zm6.923-3.384V9.923h7.693v5.693z");
}
</style><path class="zrsy49b1b"/>`,
		"fallback": "material-symbols-light:picture-in-picture-small-outline",
	});
}

export default Component;
