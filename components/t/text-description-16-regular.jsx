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
		"content": `<style>.eoqfqb4mz {
  fill: currentColor;
  d: path("M1.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM1 9.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z");
}
</style><path class="eoqfqb4mz"/>`,
		"fallback": "fluent:text-description-16-regular",
	});
}

export default Component;
