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
		"content": `<style>.fqlm3-bua {
  fill: currentColor;
  d: path("M7 4a2 2 0 1 1 4 0v1h2.379a2 2 0 0 1 1.414.586l2.06 2.06a.5.5 0 0 1 0 .708l-2.06 2.06a2 2 0 0 1-1.414.586H11v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2zm1 1h2V4a1 1 0 0 0-2 0zm0 6v6h2v-6zM4 7v2a1 1 0 0 0 1 1h8.379a1 1 0 0 0 .707-.293L15.793 8l-1.707-1.707A1 1 0 0 0 13.379 6H5a1 1 0 0 0-1 1");
}
</style><path class="fqlm3-bua"/>`,
		"fallback": "fluent:street-sign-20-regular",
	});
}

export default Component;
