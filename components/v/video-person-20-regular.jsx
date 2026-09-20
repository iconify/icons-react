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
		"content": `<style>.vrwasgj1m {
  fill: currentColor;
  d: path("M10 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5zM7 15h6v-1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5zm7 0h2.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6v-1.5A1.5 1.5 0 0 1 7.5 12h5a1.5 1.5 0 0 1 1.5 1.5z");
}
</style><path class="vrwasgj1m"/>`,
		"fallback": "fluent:video-person-20-regular",
	});
}

export default Component;
