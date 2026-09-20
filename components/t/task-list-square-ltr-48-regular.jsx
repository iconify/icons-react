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
		"content": `<style>.w6lig8ecm {
  fill: currentColor;
  d: path("M19.866 26.616a1.25 1.25 0 0 1 1.768 1.768l-4.25 4.25a1.25 1.25 0 0 1-1.768 0l-2.25-2.25a1.25 1.25 0 0 1 1.673-1.854l.095.086l1.366 1.366zM33.75 28.5a1.25 1.25 0 1 1 0 2.5h-7.5a1.25 1.25 0 1 1 0-2.5zM19.866 15.616a1.25 1.25 0 0 1 1.768 1.768l-4.25 4.25a1.25 1.25 0 0 1-1.768 0l-2.25-2.25a1.25 1.25 0 0 1 1.673-1.854l.095.086l1.366 1.366zM33.75 17a1.25 1.25 0 1 1 0 2.5h-7.5a1.25 1.25 0 1 1 0-2.5zm2-11A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-23.5A6.25 6.25 0 0 1 12.25 6zm-23.5 2.5a3.75 3.75 0 0 0-3.75 3.75v23.5a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75v-23.5a3.75 3.75 0 0 0-3.75-3.75z");
}
</style><path class="w6lig8ecm"/>`,
		"fallback": "fluent:task-list-square-ltr-48-regular",
	});
}

export default Component;
