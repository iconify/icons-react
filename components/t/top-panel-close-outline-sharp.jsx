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
		"content": `<style>.mmow40x-m {
  fill: currentColor;
  d: path("M8 16.5h8l-4-4zM5 8h14V5H5zm0 11h14v-9H5zM5 8V5zM3 21V3h18v18z");
}
</style><path class="mmow40x-m"/>`,
		"fallback": "material-symbols:top-panel-close-outline-sharp",
	});
}

export default Component;
