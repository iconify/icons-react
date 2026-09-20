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
		"content": `<style>.yf9t-mbgi {
  fill: currentColor;
  d: path("M11.5 15.308h1v-4.689l2.1 2.089l.708-.708L12 8.692L8.692 12l.708.708l2.1-2.089zM6 20V6H5V5h4v-.77h6V5h4v1h-1v14z");
}
</style><path class="yf9t-mbgi"/>`,
		"fallback": "material-symbols-light:restore-from-trash-sharp",
	});
}

export default Component;
