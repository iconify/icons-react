import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mwsh-u93l {
  fill: currentColor;
  d: path("M6 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM2.854 7.732a.5.5 0 1 0-.708.707L3.207 9.5l-1.06 1.06a.5.5 0 1 0 .707.708l1.414-1.414a.5.5 0 0 0 0-.708z");
}
</style><path class="mwsh-u93l"/>`,
		"fallback": "fluent:text-indent-increase-20-regular",
	});
}

export default Component;
