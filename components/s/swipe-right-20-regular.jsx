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
		"content": `<style>.j9xjscxda {
  fill: currentColor;
  d: path("M6 6a4 4 0 0 1 3.71 2.5H8.598a3 3 0 1 0 0 3h1.11A4.001 4.001 0 0 1 2 10a4 4 0 0 1 4-4m8.854 7.354l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.707.708L16.293 9.5H5.5a.5.5 0 0 0 0 1h10.793l-2.146 2.146a.5.5 0 0 0 .707.708");
}
</style><path class="j9xjscxda"/>`,
		"fallback": "fluent:swipe-right-20-regular",
	});
}

export default Component;
