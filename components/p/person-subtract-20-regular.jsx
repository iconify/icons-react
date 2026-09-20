import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wxuq79bmr {
  fill: currentColor;
  d: path("M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-1.991 5A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18q.127 0 .255-.003a5.5 5.5 0 0 1-.659-1.004c-1.567-.052-2.937-.41-3.923-1.04C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h4.59q.277-.538.658-1zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-7 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5");
}
</style><path class="wxuq79bmr"/>`,
		"fallback": "fluent:person-subtract-20-regular",
	});
}

export default Component;
