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
		"content": `<style>.tw954ebxp {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 1 14 4.5v9a.5.5 0 0 1-1 0v-2a1.5 1.5 0 0 0-1.5-1.5h-7A1.5 1.5 0 0 0 3 11.5v2a.5.5 0 0 1-1 0v-9A2.5 2.5 0 0 1 4.5 2zm-7 4.5A1.5 1.5 0 0 0 3 8v1.503A2.5 2.5 0 0 1 4.5 9h7c.563 0 1.082.188 1.5.503V8a1.5 1.5 0 0 0-1.5-1.5zm0-3.5A1.5 1.5 0 0 0 3 4.5v1.503A2.5 2.5 0 0 1 4.5 5.5h7c.563 0 1.082.188 1.5.503V4.5A1.5 1.5 0 0 0 11.5 3z");
}
</style><path class="tw954ebxp"/>`,
		"fallback": "fluent:stack-vertical-16-regular",
	});
}

export default Component;
