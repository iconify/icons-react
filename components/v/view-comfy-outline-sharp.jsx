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
		"content": `<style>.vw_mnk_0a {
  fill: currentColor;
  d: path("M3 19V5h18v14zm17-7.5V6H4v5.5zM9.385 18H20v-5.5H9.385zM4 18h4.385v-5.5H4z");
}
</style><path class="vw_mnk_0a"/>`,
		"fallback": "material-symbols-light:view-comfy-outline-sharp",
	});
}

export default Component;
