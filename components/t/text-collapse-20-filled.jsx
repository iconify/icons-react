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
		"content": `<style>.tsyhz203b {
  fill: currentColor;
  d: path("M5 3.5a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 3.5m0 12a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 15.5m6.75-8.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM11 11.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m-2-2a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-6 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5");
}
</style><path class="tsyhz203b"/>`,
		"fallback": "fluent:text-collapse-20-filled",
	});
}

export default Component;
