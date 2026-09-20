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
		"content": `<style>.pcd_s6dns {
  fill: currentColor;
  d: path("M4.5 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM10 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm6.5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM5.25 5.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V5.75ZM10 5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V5.75A.75.75 0 0 1 10 5Zm6.25.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V5.75Z");
}
</style><path class="pcd_s6dns"/>`,
		"fallback": "fluent:text-bullet-list-rotate-90-20-filled",
	});
}

export default Component;
