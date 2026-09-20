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
		"content": `<style>.v5idgcbeu {
  fill: currentColor;
  d: path("M2.75 3a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h9.5a1.25 1.25 0 1 1 0 2.5h-1.69l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22h1.69a2.75 2.75 0 1 0 0-5.5zM2 11.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75");
}
</style><path class="v5idgcbeu"/>`,
		"fallback": "fluent:text-wrap-16-filled",
	});
}

export default Component;
