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
		"content": `<style>.xxtp2447k {
  fill: currentColor;
  d: path("M15.75 4a5.75 5.75 0 0 1 4.504 9.321A6 6 0 0 1 16.5 24H8.75A1.75 1.75 0 0 1 7 22.25V5.75C7 4.784 7.784 4 8.75 4zM10.5 20.5h6a2.5 2.5 0 0 0 0-5h-6zm0-8.5h5.25a2.25 2.25 0 0 0 0-4.5H10.5z");
}
</style><path class="xxtp2447k"/>`,
		"fallback": "fluent:text-bold-28-filled",
	});
}

export default Component;
