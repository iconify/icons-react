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
		"content": `<style>.qlsarsb2w {
  fill: currentColor;
  d: path("M1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v2.25a.25.25 0 0 1-.25.25a.267.267 0 0 1-.26-.25A3 3 0 0 0 14 6.341V5.5A1.5 1.5 0 0 0 12.5 4h-9A1.5 1.5 0 0 0 2 5.5v5A1.5 1.5 0 0 0 3.5 12h3.55q-.05.243-.05.5q0 .25.038.5H3.5A2.5 2.5 0 0 1 1 10.5zM11.5 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 5c2.5 0 3.5-1.255 3.5-2.5a1.5 1.5 0 0 0-1.5-1.5h-4A1.5 1.5 0 0 0 8 12.5c0 1.25 1 2.5 3.5 2.5m-8-10a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V9h1a2 2 0 1 0 0-4zM5 8H4V6h1a1 1 0 0 1 0 2");
}
</style><path class="qlsarsb2w"/>`,
		"fallback": "fluent:share-screen-person-p-16-regular",
	});
}

export default Component;
