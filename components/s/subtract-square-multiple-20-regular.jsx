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
		"content": `<style>.htld5q68e {
  fill: currentColor;
  d: path("M16 5.268V13a3 3 0 0 1-3 3H5.268A2 2 0 0 0 7 17h6a4 4 0 0 0 4-4V7a2 2 0 0 0-1-1.732M11.5 9.5a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1zM13 3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm1 2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z");
}
</style><path class="htld5q68e"/>`,
		"fallback": "fluent:subtract-square-multiple-20-regular",
	});
}

export default Component;
