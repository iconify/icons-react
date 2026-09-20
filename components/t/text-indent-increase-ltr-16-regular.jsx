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
		"content": `<style>.bv8gkk4dm {
  fill: currentColor;
  d: path("M11.5 3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm3 4a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm-5 4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zM1.854 5.646a.5.5 0 0 0-.708.708L2.293 7.5L1.146 8.646a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708z");
}
</style><path class="bv8gkk4dm"/>`,
		"fallback": "fluent:text-indent-increase-ltr-16-regular",
	});
}

export default Component;
