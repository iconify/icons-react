import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lobx5w8li {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm13.25 5h-8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5");
}
</style><path class="lobx5w8li"/>`,
		"fallback": "fluent:subtract-square-24-filled",
	});
}

export default Component;
