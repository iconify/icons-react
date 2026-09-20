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
		"content": `<style>.bdmau8b_r {
  fill: currentColor;
  d: path("M5 15.25h14V12.5H5zm0-3.75h14V8.75H5zm0-3.75h14V5H5zM4 20V4h16v16zm1-1h14v-2.75H5z");
}
</style><path class="bdmau8b_r"/>`,
		"fallback": "material-symbols-light:table-rows-narrow-outline-sharp",
	});
}

export default Component;
