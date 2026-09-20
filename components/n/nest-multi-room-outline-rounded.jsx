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
		"content": `<style>.oo3r7extf {
  fill: currentColor;
  d: path("M6 19h7v-3H6zm9 0h3v-3h-3zm-9-5h3v-2.975H6zm5 0h7v-2.975h-7zM7.3 9.025h9.4L12 5.5zM6 21q-.825 0-1.412-.587T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.275-.2.575-.3T12 3.5t.625.1t.575.3l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21z");
}
</style><path class="oo3r7extf"/>`,
		"fallback": "material-symbols:nest-multi-room-outline-rounded",
	});
}

export default Component;
