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
		"content": `<style>.yeiavkbpm {
  fill: currentColor;
  d: path("M7.68 7.508L6.299 6.144l-1.02 1.02l-.707-.714L7.28 3.723l.738.714l-1.03 1.019L8.37 6.819l2.852-2.852l.713.714l-.938.933l1.877 1.877l-2.577 2.576l.708.714l2.577-2.583l2.082 2.077l-2.601 2.621l.702.67l2.602-2.583l2.578 2.56l-1.907 1.919l4.032 4.027h-1.427l-3.319-3.32l-1.889 1.9l-7.953-7.934l-.914.907l-.688-.688z");
}
</style><path class="yeiavkbpm"/>`,
		"fallback": "material-symbols-light:syringe-sharp",
	});
}

export default Component;
