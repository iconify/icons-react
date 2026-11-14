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
		"content": `<style>.u87ou5q5m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.125 1.75h.75q3.375 0 3.375 3.375v13.75q0 3.375-3.375 3.375h-.75q-3.375 0-3.375-3.375V5.125q0-3.375 3.375-3.375m13.75 0h-5q-3.375 0-3.375 3.375v.75q0 3.375 3.375 3.375h5q3.375 0 3.375-3.375v-.75q0-3.375-3.375-3.375m-5 8.75h5q3.375 0 3.375 3.375v5q0 3.375-3.375 3.375h-5q-3.375 0-3.375-3.375v-5q0-3.375 3.375-3.375");
}
</style><path class="u87ou5q5m"/>`,
		"fallback": "uix-solid:layout-template",
	});
}

export default Component;
