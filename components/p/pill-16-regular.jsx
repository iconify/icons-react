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
		"content": `<style>.qjzeims2i {
  fill: currentColor;
  d: path("M7.354 10.354a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 1 0 .708.707zM12.95 3.05a3.5 3.5 0 0 0-4.95 0L3.05 8A3.5 3.5 0 1 0 8 12.95L12.95 8a3.5 3.5 0 0 0 0-4.95M5.879 6.586l3.535 3.536l-2.12 2.12a2.5 2.5 0 0 1-3.536-3.535zm6.364.707l-2.121 2.121L6.586 5.88l2.121-2.121a2.5 2.5 0 1 1 3.536 3.535");
}
</style><path class="qjzeims2i"/>`,
		"fallback": "fluent:pill-16-regular",
	});
}

export default Component;
