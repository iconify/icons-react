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
		"content": `<style>.eovoshb7u {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-2 7h12v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z");
}
</style><path class="eovoshb7u"/>`,
		"fallback": "fluent:layout-row-two-focus-top-20-filled",
	});
}

export default Component;
