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
		"content": `<style>.f78008uuz {
  fill: currentColor;
  d: path("M7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM7 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 4.5A2.5 2.5 0 0 1 7.5 2h5A2.5 2.5 0 0 1 15 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 15.5zM7.5 3A1.5 1.5 0 0 0 6 4.5v11A1.5 1.5 0 0 0 7.5 17h5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 3z");
}
</style><path class="f78008uuz"/>`,
		"fallback": "fluent:server-20-regular",
	});
}

export default Component;
