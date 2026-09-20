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
		"content": `<style>.qk7disbnt {
  fill: currentColor;
  d: path("M7.73 16.5v-8h-2v-1h3v9zm2.77 0v-1h1v1zm2.77 0v-5h4v-3h-4v-1h5v5h-4v3h4v1z");
}
</style><path class="qk7disbnt"/>`,
		"fallback": "material-symbols-light:speed-1-2-sharp",
	});
}

export default Component;
