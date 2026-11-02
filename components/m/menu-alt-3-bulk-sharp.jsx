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
		"content": `<style>.ahowc3_6y {
  fill: currentColor;
  d: path("M13 6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm6 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm-6 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z");
}
</style><path class="ahowc3_6y"/>`,
		"fallback": "coolicons:menu-alt-3-bulk-sharp",
	});
}

export default Component;
