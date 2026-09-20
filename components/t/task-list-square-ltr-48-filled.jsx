import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uw83o6f-e {
  fill: currentColor;
  d: path("M35.75 6A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5A6.25 6.25 0 0 1 12.25 6zM21.634 26.616a1.25 1.25 0 0 0-1.768 0L16.5 29.982l-1.366-1.366l-.095-.086a1.25 1.25 0 0 0-1.673 1.854l2.25 2.25a1.25 1.25 0 0 0 1.768 0l4.25-4.25a1.25 1.25 0 0 0 0-1.768M26.25 28.5a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zm-4.616-12.884a1.25 1.25 0 0 0-1.768 0L16.5 18.982l-1.366-1.366l-.095-.086a1.25 1.25 0 0 0-1.673 1.854l2.25 2.25a1.25 1.25 0 0 0 1.768 0l4.25-4.25a1.25 1.25 0 0 0 0-1.768M26.25 17a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="uw83o6f-e"/>`,
		"fallback": "fluent:task-list-square-ltr-48-filled",
	});
}

export default Component;
