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
		"content": `<style>.kdokifbtv {
  fill: currentColor;
  d: path("M14 6a4 4 0 0 1-2.5 3.71V8.598a3 3 0 1 0-3 0v1.11A4.001 4.001 0 0 1 10 2a4 4 0 0 1 4 4M9.646 17.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.707L10.5 16.293V5.5a.5.5 0 0 0-1 0v10.793l-2.146-2.146a.5.5 0 1 0-.708.707z");
}
</style><path class="kdokifbtv"/>`,
		"fallback": "fluent:swipe-down-20-regular",
	});
}

export default Component;
