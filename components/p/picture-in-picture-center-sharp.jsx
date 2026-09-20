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
		"content": `<style>.qwu4u_bcv {
  fill: currentColor;
  d: path("M2 20V4h20v16zm6-5h8V9H8z");
}
</style><path class="qwu4u_bcv"/>`,
		"fallback": "material-symbols:picture-in-picture-center-sharp",
	});
}

export default Component;
