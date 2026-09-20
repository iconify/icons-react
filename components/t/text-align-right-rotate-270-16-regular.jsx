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
		"content": `<style>.p9jeyebvp {
  fill: currentColor;
  d: path("M3.5 11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5m4 4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5m4-8a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5");
}
</style><path class="p9jeyebvp"/>`,
		"fallback": "fluent:text-align-right-rotate-270-16-regular",
	});
}

export default Component;
