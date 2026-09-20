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
		"content": `<style>.eo8z6wb-e {
  fill: currentColor;
  d: path("M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5zm8.5 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM2.75 15.5a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75m1.5-7a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0z");
}
</style><path class="eo8z6wb-e"/>`,
		"fallback": "fluent:text-position-square-left-20-filled",
	});
}

export default Component;
