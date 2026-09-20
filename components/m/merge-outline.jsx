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
		"content": `<style>.p0pd4abbs {
  fill: currentColor;
  d: path("M6.4 21L5 19.6l4.825-4.85q.575-.575.875-1.3t.3-1.525v-5.1L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825v5.1q0 .8.3 1.525t.875 1.3L19 19.6L17.6 21L12 15.4z");
}
</style><path class="p0pd4abbs"/>`,
		"fallback": "material-symbols:merge-outline",
	});
}

export default Component;
