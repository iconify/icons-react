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
		"content": `<style>.ipy11ibzq {
  fill: currentColor;
  d: path("M3.75 13a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-.75.75m4 2a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-.75.75m4-4a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75");
}
</style><path class="ipy11ibzq"/>`,
		"fallback": "fluent:text-align-center-rotate-270-16-filled",
	});
}

export default Component;
