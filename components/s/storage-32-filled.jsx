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
		"content": `<style>.l0eldxooa {
  fill: currentColor;
  d: path("M6.5 9A4.5 4.5 0 0 0 2 13.5v5A4.5 4.5 0 0 0 6.5 23h19a4.5 4.5 0 0 0 4.5-4.5v-5A4.5 4.5 0 0 0 25.5 9zM21 14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3");
}
</style><path class="l0eldxooa"/>`,
		"fallback": "fluent:storage-32-filled",
	});
}

export default Component;
