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
		"content": `<style>.dj7bd5cyx {
  fill: currentColor;
  d: path("M11.5 15.308h1v-4.689l2.1 2.089l.708-.708L12 8.692L8.692 12l.708.708l2.1-2.089zM7.616 20q-.691 0-1.153-.462T6 18.384V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20z");
}
</style><path class="dj7bd5cyx"/>`,
		"fallback": "material-symbols-light:restore-from-trash",
	});
}

export default Component;
