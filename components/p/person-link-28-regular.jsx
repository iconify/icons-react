import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bb0veeb5y {
  fill: currentColor;
  d: path("M20 16a3 3 0 0 1 2.959 2.5h-1.544c-.19-.54-.68-.937-1.27-.993L20 17.5H6a1.5 1.5 0 0 0-1.493 1.355L4.5 19v.715c0 2.674 3.389 4.785 8.5 4.785h.166c.146.537.384 1.036.696 1.48Q13.438 26 13 26c-5.79 0-10-2.567-10-6.285V19a3 3 0 0 1 3-3zM13 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 1.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M17.75 21a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5zM17 23.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m6.25 2.25a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="bb0veeb5y"/>`,
		"fallback": "fluent:person-link-28-regular",
	});
}

export default Component;
