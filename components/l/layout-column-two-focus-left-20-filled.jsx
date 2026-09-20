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
		"content": `<style>.nqq2sfbor {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm4 13V4h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z");
}
</style><path class="nqq2sfbor"/>`,
		"fallback": "fluent:layout-column-two-focus-left-20-filled",
	});
}

export default Component;
