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
		"content": `<style>.dscm1lbwx {
  fill: currentColor;
  d: path("M6 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0M2 4a3 3 0 0 1 3-3h6a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4zm6 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-9-1a3 3 0 0 1 3-3h6a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4z");
}
</style><path class="dscm1lbwx"/>`,
		"fallback": "fluent:toggle-multiple-16-regular",
	});
}

export default Component;
