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
		"content": `<style>.sg7gi1b0a {
  fill: currentColor;
  d: path("M5 18h14v2H5zm4.6-2.7L5 10.7l2-1.9l2.6 2.6L17 4l2 2z");
}
</style><path class="sg7gi1b0a"/>`,
		"fallback": "ic:twotone-download-done",
	});
}

export default Component;
