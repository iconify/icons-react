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
		"content": `<style>.farb9_8be {
  fill: currentColor;
  d: path("M6.825 20h10.35L12 14.825zm13.95 3.6l-1.6-1.6H2l8.6-8.6l-8.2-8.175L3.8 3.8l18.4 18.4zM22 19.175l-2-2V6.825L14.825 12L13.4 10.6L22 2zM14.6 17.4");
}
</style><path class="farb9_8be"/>`,
		"fallback": "material-symbols:signal-cellular-off-outline",
	});
}

export default Component;
