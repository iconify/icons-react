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
		"content": `<style>.sw8yirb9j {
  fill: currentColor;
  d: path("m13 17l-1.4-1.4l2.575-2.6H6v-2h8.175L11.6 8.4L13 7l5 5Zm3 4v-2h3v-3h2v5ZM3 21v-5h2v3h3v2ZM3 8V3h5v2H5v3Zm16 0V5h-3V3h5v5Z");
}
</style><path class="sw8yirb9j"/>`,
		"fallback": "material-symbols:stabilization-pan",
	});
}

export default Component;
