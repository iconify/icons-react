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
		"content": `<style>.ub92rlb4e {
  fill: currentColor;
  d: path("M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 5h8v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z");
}
</style><path class="ub92rlb4e"/>`,
		"fallback": "fluent:phone-page-header-20-regular",
	});
}

export default Component;
