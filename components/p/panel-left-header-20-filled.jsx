import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jl7r83b_r {
  fill: currentColor;
  d: path("M5 3a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm12 3v1H8.5V4H15a2 2 0 0 1 2 2m-2 9H8.5V8H17v5a2 2 0 0 1-2 2");
}
</style><path class="jl7r83b_r"/>`,
		"fallback": "fluent:panel-left-header-20-filled",
	});
}

export default Component;
