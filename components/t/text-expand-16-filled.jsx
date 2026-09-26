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
		"content": `<style>.v24wnnrbm {
  fill: currentColor;
  d: path("M13.25 12.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm-8.75-8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m0 1.5a.5.5 0 0 0-.5.5v1H3a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1H5v-1a.5.5 0 0 0-.5-.5m8.75 3a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5zm0-3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5zm0-3.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="v24wnnrbm"/>`,
		"fallback": "fluent:text-expand-16-filled",
	});
}

export default Component;
