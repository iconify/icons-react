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
		"content": `<style>.zuqw0qbpl {
  fill: currentColor;
  d: path("M13.5 2a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zM6 4.5a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1 0-1zm.5 3A.5.5 0 0 0 6 7H2.5a.5.5 0 0 0 0 1H6a.5.5 0 0 0 .5-.5m-.5 2a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1 0-1zm8 3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5M13 7a2 2 0 1 0-4 0v3.5a.5.5 0 0 1-1 0V7a3 3 0 0 1 6 0v3.5a.5.5 0 0 1-1 0z");
}
</style><path class="zuqw0qbpl"/>`,
		"fallback": "fluent:text-position-square-right-16-regular",
	});
}

export default Component;
