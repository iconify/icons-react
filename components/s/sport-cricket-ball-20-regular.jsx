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
		"content": `<style>.p4zlwnbqe {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 1a7 7 0 0 0-6 10.605V13.5a.5.5 0 0 1 1 0v1c0 .11-.037.21-.098.293A6.98 6.98 0 0 0 10 17a7 7 0 0 0 5.976-10.646A.5.5 0 0 1 15.5 7h-1a.5.5 0 0 1 0-1h1c.128 0 .243.05.331.128A6.99 6.99 0 0 0 10 3M7.5 14a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-1-3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m3 1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-1-3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m3 1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-1-3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m3 1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-1-3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5");
}
</style><path class="p4zlwnbqe"/>`,
		"fallback": "fluent:sport-cricket-ball-20-regular",
	});
}

export default Component;
