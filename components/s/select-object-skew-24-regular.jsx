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
		"content": `<style>.k9hxs5b_r {
  fill: currentColor;
  d: path("M18.882 6.658a2 2 0 0 0 1.33.33a2 2 0 1 0-1.33-.33M14 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0M4 21a2 2 0 1 1 0-4a2 2 0 0 1 0 4M6.882 6.658a2 2 0 0 0 1.33.33A2.002 2.002 0 0 0 9.855 4.25a2 2 0 1 0-2.973 2.408m-.401.93L4.077 16a3 3 0 0 1 1.442.412l2.404-8.414a3 3 0 0 1-1.442-.412M17.095 5.75h-6.19a3 3 0 0 0 0-1.5h6.19a3 3 0 0 0 0 1.5m-4 14a3 3 0 0 1 0-1.5h-6.19a3 3 0 0 1 0 1.5zm2.982-3.749l2.404-8.414c.425.25.917.399 1.442.412l-2.404 8.414A3 3 0 0 0 16.077 16");
}
</style><path class="k9hxs5b_r"/>`,
		"fallback": "fluent:select-object-skew-24-regular",
	});
}

export default Component;
