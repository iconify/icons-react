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
		"content": `<style>.c7dec1b0d {
  fill: currentColor;
  d: path("M6.25 4A2.25 2.25 0 0 0 4 6.25v7.5A2.25 2.25 0 0 0 6.25 16h11.5A2.25 2.25 0 0 0 20 13.75v-7.5A2.25 2.25 0 0 0 17.75 4zM5.5 6.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75zM2.75 17.5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="c7dec1b0d"/>`,
		"fallback": "fluent:laptop-24-regular",
	});
}

export default Component;
