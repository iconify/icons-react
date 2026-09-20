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
		"content": `<style>.i15u0bb2x {
  fill: currentColor;
  d: path("M3.75 11a.75.75 0 0 1-.75-.75v-8.5a.75.75 0 0 1 1.5 0v8.5a.75.75 0 0 1-.75.75m4 4a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-.75.75m4-8a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75");
}
</style><path class="i15u0bb2x"/>`,
		"fallback": "fluent:text-align-right-rotate-270-16-filled",
	});
}

export default Component;
