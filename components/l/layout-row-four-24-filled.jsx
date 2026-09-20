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
		"content": `<style>.s06x40c9p {
  fill: currentColor;
  d: path("M3 8v3.25h18V8zm18-1.5v-.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v.25zM3 16v-3.25h18V16zm0 1.5v.25A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75v-.25z");
}
</style><path class="s06x40c9p"/>`,
		"fallback": "fluent:layout-row-four-24-filled",
	});
}

export default Component;
