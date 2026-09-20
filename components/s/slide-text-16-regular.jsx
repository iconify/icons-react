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
		"content": `<style>.rmmupue0m {
  fill: currentColor;
  d: path("M4.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M4.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM2 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z");
}
</style><path class="rmmupue0m"/>`,
		"fallback": "fluent:slide-text-16-regular",
	});
}

export default Component;
