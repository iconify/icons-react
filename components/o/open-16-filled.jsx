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
		"content": `<style>.fncbsfdqy {
  fill: currentColor;
  d: path("M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 0 1 1.5 0v1.5A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2h1.5a.75.75 0 0 1 0 1.5zM8 2.75A.75.75 0 0 1 8.75 2h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V4.561l-3.22 3.22A.75.75 0 1 1 8.22 6.72l3.22-3.22H8.75A.75.75 0 0 1 8 2.75");
}
</style><path class="fncbsfdqy"/>`,
		"fallback": "fluent:open-16-filled",
	});
}

export default Component;
