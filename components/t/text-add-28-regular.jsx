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
		"content": `<style>.gjpospbrq {
  fill: currentColor;
  d: path("M20.5 14a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13m0 2a.5.5 0 0 0-.5.5V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21v-3.5a.5.5 0 0 0-.5-.5m.75-12a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V5.5h-6.75v11.727c-.48.989-.75 2.1-.75 3.273c0 1.264.314 2.455.866 3.5H10.75a.75.75 0 0 1 0-1.5h1.5v-17H5.5v2.75a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 4.75 4z");
}
</style><path class="gjpospbrq"/>`,
		"fallback": "fluent:text-add-28-regular",
	});
}

export default Component;
