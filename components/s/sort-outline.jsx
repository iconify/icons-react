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
		"content": `<style>.cui83ccbj {
  fill: currentColor;
  d: path("M4 17v-1h4.75v1zm0-4.5v-1h10.366v1zM4 8V7h16v1z");
}
</style><path class="cui83ccbj"/>`,
		"fallback": "material-symbols-light:sort-outline",
	});
}

export default Component;
