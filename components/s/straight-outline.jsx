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
		"content": `<style>.xijx_-bbu {
  fill: currentColor;
  d: path("M11.5 20V5.883L9.38 7.996l-.688-.688L12 4l3.308 3.308l-.689.688L12.5 5.883V20z");
}
</style><path class="xijx_-bbu"/>`,
		"fallback": "material-symbols-light:straight-outline",
	});
}

export default Component;
