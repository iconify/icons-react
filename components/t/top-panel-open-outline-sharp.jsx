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
		"content": `<style>.mx0kys2xx {
  fill: currentColor;
  d: path("m12 15.596l3.173-3.192H8.827zM5 8h14V5H5zm0 11h14V9H5zM5 8V5zM4 20V4h16v16z");
}
</style><path class="mx0kys2xx"/>`,
		"fallback": "material-symbols-light:top-panel-open-outline-sharp",
	});
}

export default Component;
