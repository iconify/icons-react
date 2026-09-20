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
		"content": `<style>.oopqzei0y {
  fill: currentColor;
  d: path("M4 13.25A6.25 6.25 0 0 1 10.25 7h27.5A6.25 6.25 0 0 1 44 13.25v21.5A6.25 6.25 0 0 1 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h5.5v-29zm8 11v18h19.5a3.75 3.75 0 0 0 3.75-3.75V20.5zm0-2.5H41.5v-4.75a3.75 3.75 0 0 0-3.75-3.75h-19.5z");
}
</style><path class="oopqzei0y"/>`,
		"fallback": "fluent:panel-left-header-48-regular",
	});
}

export default Component;
