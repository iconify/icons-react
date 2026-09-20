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
		"content": `<style>.gd479hbkb {
  fill: currentColor;
  d: path("M9 18v-2h12v2zm0-5v-2h12v2zM3 8V6h18v2z");
}
</style><path class="gd479hbkb"/>`,
		"fallback": "material-symbols:segment-outline",
	});
}

export default Component;
