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
		"content": `<style>.j1yfmje4z {
  fill: currentColor;
  d: path("M7.73 16.5v-1h1v1zm8.27 0v-1h4v-3h-4v-5h5v1h-4v3h4v5zm-11 0v-8H3v-1h3v9zm6.27 0l2-8H9.307v-1h5v1.07l-2 7.93z");
}
</style><path class="j1yfmje4z"/>`,
		"fallback": "material-symbols-light:speed-1-75-outline-sharp",
	});
}

export default Component;
