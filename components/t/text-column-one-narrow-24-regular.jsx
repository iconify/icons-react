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
		"content": `<style>.scd7tk8xw {
  fill: currentColor;
  d: path("M8.75 5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM8 13.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M8.75 17a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="scd7tk8xw"/>`,
		"fallback": "fluent:text-column-one-narrow-24-regular",
	});
}

export default Component;
