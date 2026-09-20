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
		"content": `<style>.sncs8uicx {
  fill: currentColor;
  d: path("M12.5 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0 20a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM4 16.5a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1m19-1a1 1 0 1 0 2 0v-3a1 1 0 1 0-2 0zM8 4a1 1 0 0 0-1-1h-.25A3.75 3.75 0 0 0 3 6.75V7a1 1 0 0 0 2 0v-.25C5 5.784 5.784 5 6.75 5H7a1 1 0 0 0 1-1M7 25a1 1 0 1 0 0-2h-.25A1.75 1.75 0 0 1 5 21.25V21a1 1 0 1 0-2 0v.25A3.75 3.75 0 0 0 6.75 25zM20 4a1 1 0 0 1 1-1h.25A3.75 3.75 0 0 1 25 6.75V7a1 1 0 1 1-2 0v-.25A1.75 1.75 0 0 0 21.25 5H21a1 1 0 0 1-1-1m1 21a1 1 0 1 1 0-2h.25A1.75 1.75 0 0 0 23 21.25V21a1 1 0 1 1 2 0v.25A3.75 3.75 0 0 1 21.25 25z");
}
</style><path class="sncs8uicx"/>`,
		"fallback": "fluent:square-hint-28-filled",
	});
}

export default Component;
