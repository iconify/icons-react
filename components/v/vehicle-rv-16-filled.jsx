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
		"content": `<style>.a30a0ac2p {
  fill: currentColor;
  d: path("M12.616 2.009a1.75 1.75 0 0 1 1.572 1.741V5a1 1 0 0 1-1 1h-.38l1.057 2.113A1.75 1.75 0 0 1 15 9.75v.5A1.75 1.75 0 0 1 13.25 12H13a2 2 0 1 1-4 0H7a2 2 0 1 1-4 0h-.25A1.75 1.75 0 0 1 1 10.25v-6.5C1 2.784 1.784 2 2.75 2h9.688zM5 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M9.75 6a.75.75 0 0 0-.75.75V8h3.691l-1-2zM4 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-.897-.995L6 5z");
}
</style><path class="a30a0ac2p"/>`,
		"fallback": "fluent:vehicle-rv-16-filled",
	});
}

export default Component;
