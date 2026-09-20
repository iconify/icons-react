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
		"content": `<style>.xryy_f6rn {
  fill: currentColor;
  d: path("m7.4 21.375l-1.4-1.4l6-6l6 6l-1.4 1.4L12 16.8zm0-6l-1.4-1.4l6-6l6 6l-1.4 1.4L12 10.8zm0-6L6 7.975l6-6l6 6l-1.4 1.4L12 4.8z");
}
</style><path class="xryy_f6rn"/>`,
		"fallback": "material-symbols:stat-3",
	});
}

export default Component;
