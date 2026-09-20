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
		"content": `<style>.sfh5-_r3i {
  fill: currentColor;
  d: path("M1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v2.25a.25.25 0 0 1-.25.25a.267.267 0 0 1-.26-.25a3 3 0 1 0-5.217 2.26A2.5 2.5 0 0 0 7 12.5q0 .25.038.5H3.5A2.5 2.5 0 0 1 1 10.5zm2 0v5a.5.5 0 0 0 1 0V9h1a2 2 0 1 0 0-4H3.5a.5.5 0 0 0-.5.5M4 8h1a1 1 0 0 0 0-2H4zm9.5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S8 13.75 8 12.5A1.5 1.5 0 0 1 9.5 11h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="sfh5-_r3i"/>`,
		"fallback": "fluent:share-screen-person-p-16-filled",
	});
}

export default Component;
