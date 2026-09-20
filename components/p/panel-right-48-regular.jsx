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
		"content": `<style>.xdnmkzbcw {
  fill: currentColor;
  d: path("M37.75 7A6.25 6.25 0 0 1 44 13.25v21.5A6.25 6.25 0 0 1 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75v-21.5A6.25 6.25 0 0 1 10.25 7zm3.75 6.25a3.75 3.75 0 0 0-3.75-3.75h-5.5v29h5.5a3.75 3.75 0 0 0 3.75-3.75zM29.75 38.5v-29h-19.5a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75z");
}
</style><path class="xdnmkzbcw"/>`,
		"fallback": "fluent:panel-right-48-regular",
	});
}

export default Component;
