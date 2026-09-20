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
		"content": `<style>.bzr73n2uj {
  fill: currentColor;
  d: path("M11.5 21v-4h-5L4 14.5L6.5 12h5v-2H5V5h6.5V3h1v2h5L20 7.5L17.5 10h-5v2H19v5h-6.5v4z");
}
</style><path class="bzr73n2uj"/>`,
		"fallback": "material-symbols-light:signpost",
	});
}

export default Component;
