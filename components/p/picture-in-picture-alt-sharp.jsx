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
		"content": `<style>.icija0bln {
  fill: currentColor;
  d: path("M2 20V4h20v16zm9-3h8v-6h-8zm4-3");
}
</style><path class="icija0bln"/>`,
		"fallback": "material-symbols:picture-in-picture-alt-sharp",
	});
}

export default Component;
