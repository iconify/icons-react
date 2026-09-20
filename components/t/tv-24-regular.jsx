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
		"content": `<style>.b31zq1bqb {
  fill: currentColor;
  d: path("M4.75 4A2.75 2.75 0 0 0 2 6.75v8.5A2.75 2.75 0 0 0 4.75 18h14.5A2.75 2.75 0 0 0 22 15.25v-8.5A2.75 2.75 0 0 0 19.25 4zM3.5 6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25zM5.75 19.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="b31zq1bqb"/>`,
		"fallback": "fluent:tv-24-regular",
	});
}

export default Component;
