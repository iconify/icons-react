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
		"content": `<style>.oltllnuzx {
  fill: currentColor;
  d: path("M11.846 18.25h1v-1h2v-4h-4v-2h4v-1h-2v-1h-1v1h-2v4h4v2h-4v1h2zM5 21V3h9.73L19 7.27V21zm1-1h12V7.77h-3.77V4H6zM6 4v3.77zv16z");
}
</style><path class="oltllnuzx"/>`,
		"fallback": "material-symbols-light:request-quote-outline-sharp",
	});
}

export default Component;
