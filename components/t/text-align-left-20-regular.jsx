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
		"content": `<style>.c3xuyfz3y {
  fill: currentColor;
  d: path("M2 4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z");
}
</style><path class="c3xuyfz3y"/>`,
		"fallback": "fluent:text-align-left-20-regular",
	});
}

export default Component;
