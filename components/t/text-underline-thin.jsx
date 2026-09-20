import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.do-xv8r6x {
  fill: currentColor;
  d: path("M196 224a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h128a4 4 0 0 1 4 4m-68-28a60.07 60.07 0 0 0 60-60V56a4 4 0 0 0-8 0v80a52 52 0 0 1-104 0V56a4 4 0 0 0-8 0v80a60.07 60.07 0 0 0 60 60");
}
</style><path class="do-xv8r6x"/>`,
		"fallback": "ph:text-underline-thin",
	});
}

export default Component;
