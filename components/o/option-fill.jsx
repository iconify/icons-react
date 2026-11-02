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
		"content": `<style>.uzlj2ol0i {
  fill: currentColor;
  d: path("M3 6h6c.351 0 .677.184.857.486L15.566 16H21a1 1 0 0 1 0 2h-6a1 1 0 0 1-.857-.486L8.434 8H3a1 1 0 0 1 0-2m12 0h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}
</style><path class="uzlj2ol0i"/>`,
		"fallback": "coolicons:option-fill",
	});
}

export default Component;
