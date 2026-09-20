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
		"content": `<style>.aa2ipkbub {
  fill: currentColor;
  d: path("M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75M4.5 12a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7M5 6.5a.5.5 0 0 0-1 0V8H2.5a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 1 0V9h1.5a.5.5 0 0 0 0-1H5zm-2.25 7a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM9 10.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75M9.75 6a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="aa2ipkbub"/>`,
		"fallback": "fluent:text-expand-16-filled",
	});
}

export default Component;
