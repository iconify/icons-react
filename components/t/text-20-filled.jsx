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
		"content": `<style>.vz0tqbbxj {
  fill: currentColor;
  d: path("M4 3.75A.75.75 0 0 1 4.75 3h10a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V4.5h-3.5v11h1.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5H9v-11H5.5v.75a.75.75 0 0 1-1.5 0z");
}
</style><path class="vz0tqbbxj"/>`,
		"fallback": "fluent:text-20-filled",
	});
}

export default Component;
