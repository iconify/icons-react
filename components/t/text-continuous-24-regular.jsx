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
		"content": `<style>.ta3-uiiza {
  fill: currentColor;
  d: path("M3.75 5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm5 4a.75.75 0 0 0 0 1.5h11.5a.75.75 0 0 0 0-1.5zM8 13.75a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1-.75-.75M3.75 17a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm-.53-5.97a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l.97-.97z");
}
</style><path class="ta3-uiiza"/>`,
		"fallback": "fluent:text-continuous-24-regular",
	});
}

export default Component;
