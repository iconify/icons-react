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
		"content": `<style>.ue5mvwb9g {
  fill: currentColor;
  d: path("M6.627 5h10.622a2.75 2.75 0 0 1 2.75 2.75v6.622a2.25 2.25 0 0 0 1.5-2.122v-4.5a4.25 4.25 0 0 0-4.25-4.25h-8.5A2.25 2.25 0 0 0 6.627 5M6.25 6A2.25 2.25 0 0 0 4 8.25v6.5A2.25 2.25 0 0 0 6.25 17h10.5A2.25 2.25 0 0 0 19 14.75v-6.5A2.25 2.25 0 0 0 16.75 6zm-3.5 12.5a.75.75 0 0 0 0 1.5h17.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="ue5mvwb9g"/>`,
		"fallback": "fluent:laptop-multiple-24-filled",
	});
}

export default Component;
