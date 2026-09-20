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
		"content": `<style>.je0f80bbx {
  fill: currentColor;
  d: path("M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2m0 23a9 9 0 1 1 0-18a9 9 0 0 1 0 18");
}
</style><path class="je0f80bbx"/>`,
		"fallback": "fluent:record-32-filled",
	});
}

export default Component;
