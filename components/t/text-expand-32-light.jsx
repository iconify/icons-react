import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sjtat7zsq {
  fill: currentColor;
  d: path("M29.5 26a.5.5 0 0 1 0 1h-22a.5.5 0 0 1 0-1zM8.75 9a6.75 6.75 0 1 1 0 13.5a6.75 6.75 0 0 1 0-13.5m0 3a.75.75 0 0 0-.75.75V15H5.75a.75.75 0 0 0 0 1.5H8v2.25a.75.75 0 0 0 1.5 0V16.5h2.25a.75.75 0 0 0 0-1.5H9.5v-2.25a.75.75 0 0 0-.75-.75m20.75 7a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0-8a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0-7a.5.5 0 0 1 0 1h-22a.5.5 0 0 1 0-1z");
}
</style><path class="sjtat7zsq"/>`,
		"fallback": "fluent:text-expand-32-light",
	});
}

export default Component;
