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
		"content": `<style>.i7pgc_e7m {
  fill: currentColor;
  d: path("M19 8a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm0 6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z");
}
</style><path class="i7pgc_e7m"/>`,
		"fallback": "coolicons:menu-double-fill-round",
	});
}

export default Component;
