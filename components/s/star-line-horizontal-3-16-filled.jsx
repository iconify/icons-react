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
		"content": `<style>.vd9ym65sv {
  fill: currentColor;
  d: path("M8.808 2.101a.9.9 0 0 0-1.614 0L5.673 5.183l-3.401.495a.9.9 0 0 0-.5 1.535l2.462 2.399l-.581 3.387a.9.9 0 0 0 1.306.949L8 12.348l.482.254A1.5 1.5 0 0 1 9.5 10a1.5 1.5 0 1 1 0-3a1.5 1.5 0 1 1 0-3h.245zM9.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z");
}
</style><path class="vd9ym65sv"/>`,
		"fallback": "fluent:star-line-horizontal-3-16-filled",
	});
}

export default Component;
