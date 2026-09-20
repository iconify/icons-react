import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wxfptyl0i {
  fill: currentColor;
  d: path("M5 2a3 3 0 0 0-3 3v2.354a4 4 0 0 1 1-.819V5a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 0-1zm10 16h-2.354a4 4 0 0 0 .819-1H15a2 2 0 0 0 2-2v-3.5a.5.5 0 0 1 1 0V15a3 3 0 0 1-3 3M11.5 2a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3zM5 7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3zm-2 3a2 2 0 0 1 2-2v2zm3 0V8h3v2zm4 0V8a2 2 0 0 1 2 2zm-4 1h3v3H6zm4 0h2v3h-2zm-4 4h3v2H6zm6 0a2 2 0 0 1-2 2v-2zm-9-4h2v3H3zm0 4h2v2a2 2 0 0 1-2-2");
}
</style><path class="wxfptyl0i"/>`,
		"fallback": "fluent:resize-table-20-regular",
	});
}

export default Component;
