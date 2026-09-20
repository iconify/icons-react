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
		"content": `<style>.a302i297m {
  fill: currentColor;
  d: path("M13.5 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M11 11a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zM5 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-.25-2A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4zM3 6.75C3 5.784 3.784 5 4.75 5h10.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 15.25 15H4.75A1.75 1.75 0 0 1 3 13.25z");
}
</style><path class="a302i297m"/>`,
		"fallback": "fluent:share-screen-person-overlay-inside-20-regular",
	});
}

export default Component;
