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
		"content": `<style>.jj9obk32d {
  fill: currentColor;
  d: path("M7.73 16.5v-8h-2v-1h3v9zm2.77 0v-1h1v1zm2.77 0v-1h4v-3h-4v-5h5v1h-4v3h4v5z");
}
</style><path class="jj9obk32d"/>`,
		"fallback": "material-symbols-light:speed-1-5-outline-sharp",
	});
}

export default Component;
