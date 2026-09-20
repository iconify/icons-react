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
		"content": `<style>.gf1738vbu {
  fill: currentColor;
  d: path("M6.59 6.992A.5.5 0 0 0 6.5 6h-2l-.09.008A.5.5 0 0 0 4.5 7h2zm0 3A.5.5 0 0 0 6.5 9h-2l-.09.008A.5.5 0 0 0 4.5 10h2zM7 12.5a.5.5 0 0 1-.41.492L6.5 13h-2a.5.5 0 0 1-.09-.992L4.5 12h2a.5.5 0 0 1 .5.5M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4.207a5.5 5.5 0 0 1-.185-1H9V4h6a2 2 0 0 1 2 2v3.6q.538.276 1 .657V6a3 3 0 0 0-3-3zm0 1h3v11H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="gf1738vbu"/>`,
		"fallback": "fluent:panel-left-text-add-20-regular",
	});
}

export default Component;
