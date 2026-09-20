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
		"content": `<style>.zndlcdjau {
  fill: currentColor;
  d: path("M3 23V1h18v22zm2-5v3h14v-3zm5 2h4v-1h-4zm-5-4h14V6H5zM5 4h14V3H5zm0 0V3zm0 14v3z");
}
</style><path class="zndlcdjau"/>`,
		"fallback": "material-symbols:tablet-android-outline-sharp",
	});
}

export default Component;
