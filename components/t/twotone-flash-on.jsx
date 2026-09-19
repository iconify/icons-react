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
		"content": `<style>.ou4baab9p {
  fill: currentColor;
  d: path("M17 10h-4l3-8H7v11h3v9z");
}
</style><path class="ou4baab9p"/>`,
		"fallback": "ic:twotone-flash-on",
	});
}

export default Component;
