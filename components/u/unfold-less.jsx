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
		"content": `<style>.ky9z5uzwi {
  fill: currentColor;
  d: path("m8.9 20l-1.4-1.4l4.5-4.5l4.5 4.5l-1.4 1.4l-3.1-3.1zM12 9.9L7.5 5.4L8.9 4L12 7.1L15.1 4l1.4 1.4z");
}
</style><path class="ky9z5uzwi"/>`,
		"fallback": "material-symbols:unfold-less",
	});
}

export default Component;
