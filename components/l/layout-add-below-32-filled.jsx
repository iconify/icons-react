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
		"content": `<style>.wz_y-2buq {
  fill: currentColor;
  d: path("M28 27a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM24.5 3A4.5 4.5 0 0 1 29 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7.5A4.5 4.5 0 0 1 7.5 3z");
}
</style><path class="wz_y-2buq"/>`,
		"fallback": "fluent:layout-add-below-32-filled",
	});
}

export default Component;
