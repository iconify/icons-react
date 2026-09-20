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
		"content": `<style>.nuqmcbb4v {
  fill: currentColor;
  d: path("M14 6a4 4 0 0 1-2.25 3.598V8.437a3 3 0 1 0-3.5 0v1.16A4 4 0 1 1 14 6M9.47 17.78a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V5.75a.75.75 0 0 0-1.5 0v9.69l-1.22-1.22a.75.75 0 0 0-1.06 1.06z");
}
</style><path class="nuqmcbb4v"/>`,
		"fallback": "fluent:swipe-down-20-filled",
	});
}

export default Component;
