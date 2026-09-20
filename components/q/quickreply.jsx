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
		"content": `<style>.gi7gjuq9d {
  fill: currentColor;
  d: path("M19 23v-5h-2v-6h5l-1.7 4h2.2zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v6h-7v8H6z");
}
</style><path class="gi7gjuq9d"/>`,
		"fallback": "material-symbols:quickreply",
	});
}

export default Component;
