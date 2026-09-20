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
		"content": `<style>.cwehqmb4m {
  fill: currentColor;
  d: path("M6 4v5zv16v-.238V20zm0 18q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v4.35q-.475-.175-.975-.262T18 12V9h-5V4H6v16h6.35q.2.575.5 1.075t.7.925zm9.9-.5l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.075 2.1l2.075 2.1l-1.4 1.4l-2.1-2.075z");
}
</style><path class="cwehqmb4m"/>`,
		"fallback": "material-symbols:scan-delete-outline",
	});
}

export default Component;
