import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n94neebvb {
  fill: currentColor;
  d: path("M7 20V9h10.2l-1.6-1.6L17 6l4 4l-4 4l-1.4-1.4l1.6-1.6H9v9z");
}
</style><path class="n94neebvb"/>`,
		"fallback": "material-symbols:turn-right-sharp",
	});
}

export default Component;
