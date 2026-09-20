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
		"content": `<style>.nv-c0x6et {
  fill: currentColor;
  d: path("M8 17h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H8zM7 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1z");
}
</style><path class="nv-c0x6et"/>`,
		"fallback": "fluent:layout-column-one-third-left-20-filled",
	});
}

export default Component;
