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
		"content": `<style>.nk59wac0s {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm12-2V4H6v16zm0-16H6zm-7 9h6V5h-6zm2-2V7h2v4z");
}
</style><path class="nk59wac0s"/>`,
		"fallback": "material-symbols:picture-in-picture-mobile-outline",
	});
}

export default Component;
