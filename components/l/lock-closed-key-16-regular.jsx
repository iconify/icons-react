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
		"content": `<style>.d_2ralbsh {
  fill: currentColor;
  d: path("M13 7a3 3 0 1 1-1 5.83v.67a.5.5 0 0 1-.5.5H11v.5a.5.5 0 0 1-.5.5H10v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.086a1 1 0 0 1 .293-.707l2.836-2.836A3 3 0 0 1 13 7M7 1a3 3 0 0 1 3 3v2c.46 0 .882.156 1.22.417a4 4 0 0 0-.918.629A1 1 0 0 0 10 7H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.045a2 2 0 0 0-.045.414V15H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2V4a3 3 0 0 1 3-3m0 8.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m6.75-1a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M7 2a2 2 0 0 0-2 2v2h4V4a2 2 0 0 0-2-2");
}
</style><path class="d_2ralbsh"/>`,
		"fallback": "fluent:lock-closed-key-16-regular",
	});
}

export default Component;
