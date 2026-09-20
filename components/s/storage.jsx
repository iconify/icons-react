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
		"content": `<style>.tza20vb4d {
  fill: currentColor;
  d: path("M3 20v-4h18v4zm2-1h2v-2H5zM3 8V4h18v4zm2-1h2V5H5zm-2 7v-4h18v4zm2-1h2v-2H5z");
}
</style><path class="tza20vb4d"/>`,
		"fallback": "material-symbols:storage",
	});
}

export default Component;
