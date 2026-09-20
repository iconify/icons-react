import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a80o4aboz {
  fill: currentColor;
  d: path("M5.704 1.74a.75.75 0 0 0-1.408 0l-3.5 9.5a.75.75 0 0 0 1.408.52l.924-2.51h2.015a5.5 5.5 0 0 1 .593-1.5H3.68L5 4.17l1.11 3.015a5.5 5.5 0 0 1 1.175-1.149zM10.5 7.876a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25m0 5.125a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5m0-7a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m0 8a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7");
}
</style><path class="a80o4aboz"/>`,
		"fallback": "fluent:text-font-info-16-filled",
	});
}

export default Component;
