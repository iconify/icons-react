import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zm_8673gz {
  fill: currentColor;
  d: path("M4.5 6.5a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1zM2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm9 7.5a2.5 2.5 0 0 1-2.5 2.5H3.268A2 2 0 0 0 5 14h5.5a3.5 3.5 0 0 0 3.5-3.5V5a2 2 0 0 0-1-1.732z");
}
</style><path class="zm_8673gz"/>`,
		"fallback": "fluent:subtract-square-multiple-16-regular",
	});
}

export default Component;
