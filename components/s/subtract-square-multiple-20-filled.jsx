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
		"content": `<style>.ekdfz3b2d {
  fill: currentColor;
  d: path("M16 5.268A2 2 0 0 1 17 7v6a4 4 0 0 1-4 4H7a2 2 0 0 1-1.732-1H13a3 3 0 0 0 3-3zM15 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm-3 4a.5.5 0 0 1-.5.5h-5a.5.5 0 1 1 0-1h5a.5.5 0 0 1 .5.5");
}
</style><path class="ekdfz3b2d"/>`,
		"fallback": "fluent:subtract-square-multiple-20-filled",
	});
}

export default Component;
