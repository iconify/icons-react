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
		"content": `<style>.iv83y_btj {
  fill: currentColor;
  d: path("M20 16a3 3 0 0 1 2.959 2.5H17.75a4.75 4.75 0 0 0-3.888 7.48Q13.438 26 13 26c-5.79 0-10-2.567-10-6.285V19a3 3 0 0 1 3-3zM13 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12m4.75 19a2.25 2.25 0 0 0 0 4.5h.5a.75.75 0 0 1 0 1.5h-.5a3.75 3.75 0 1 1 0-7.5h.5a.75.75 0 0 1 0 1.5zM17 23.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m6.25 2.25a2.25 2.25 0 0 0 0-4.5h-.5a.75.75 0 0 1 0-1.5h.5a3.75 3.75 0 1 1 0 7.5h-.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="iv83y_btj"/>`,
		"fallback": "fluent:person-link-28-filled",
	});
}

export default Component;
