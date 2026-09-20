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
		"content": `<style>.uobvwb9zb {
  fill: currentColor;
  d: path("M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h6.748a6.5 6.5 0 0 1-.422-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v4.982A6.5 6.5 0 0 1 22 12.81V6.75A2.75 2.75 0 0 0 19.25 4zM7.5 8a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 0 0 0-3zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z");
}
</style><path class="uobvwb9zb"/>`,
		"fallback": "fluent:slide-text-title-add-24-regular",
	});
}

export default Component;
