import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jnjanvijv {
  fill: currentColor;
  d: path("M4.5 4A1.5 1.5 0 0 0 3 5.5v4A1.5 1.5 0 0 0 4.5 11h7A1.5 1.5 0 0 0 13 9.5v-4A1.5 1.5 0 0 0 11.5 4zM4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z");
}
</style><path class="jnjanvijv"/>`,
		"fallback": "fluent:laptop-16-regular",
	});
}

export default Component;
