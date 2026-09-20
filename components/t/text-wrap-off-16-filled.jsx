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
		"content": `<style>.bhtvawblp {
  fill: currentColor;
  d: path("m11.793 12.5l2.353 2.354a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l1.24 1.24A.75.75 0 0 0 2.75 4.5h1.043l2.5 2.5H2.75a.75.75 0 0 0 0 1.5h5.043l1.573 1.573L8.22 11.22a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22zM9.12 7l1.5 1.5h1.629a1.25 1.25 0 0 1 .674 2.303l1.072 1.072A2.75 2.75 0 0 0 12.25 7zm-4-4l1.5 1.5h6.629a.75.75 0 0 0 0-1.5zM2 11.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75");
}
</style><path class="bhtvawblp"/>`,
		"fallback": "fluent:text-wrap-off-16-filled",
	});
}

export default Component;
