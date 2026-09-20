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
		"content": `<style>.jklsm8b5e {
  fill: currentColor;
  d: path("M4 10.25A6.25 6.25 0 0 1 10.25 4h19a6.25 6.25 0 0 1 6.25 6.25V21H21v14.5H10.25A6.25 6.25 0 0 1 4 29.25zm29 0a3.75 3.75 0 0 0-3.75-3.75H21v12h12zM18.5 6.5h-8.25a3.75 3.75 0 0 0-3.75 3.75v8.25h12zm-12 22.75A3.75 3.75 0 0 0 10.25 33h8.25V21h-12zm18.5 0A4.25 4.25 0 0 1 29.25 25h10.5A4.25 4.25 0 0 1 44 29.25v10.5A4.25 4.25 0 0 1 39.75 44h-10.5A4.25 4.25 0 0 1 25 39.75z");
}
</style><path class="jklsm8b5e"/>`,
		"fallback": "fluent:table-simple-exclude-48-regular",
	});
}

export default Component;
