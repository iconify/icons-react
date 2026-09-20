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
		"content": `<style>.cdhhhubes {
  fill: currentColor;
  d: path("M6 18v-2h12v2zm6-12.4l6 6l-1.4 1.4L12 8.4L7.4 13L6 11.6z");
}
</style><path class="cdhhhubes"/>`,
		"fallback": "material-symbols:keyboard-capslock-outline",
	});
}

export default Component;
