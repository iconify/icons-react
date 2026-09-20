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
		"content": `<style>.y_a00mb8o {
  fill: currentColor;
  d: path("m12 22l-7-7l1.4-1.4l4.6 4.575V2h2v16.175l4.6-4.6L19 15z");
}
</style><path class="y_a00mb8o"/>`,
		"fallback": "material-symbols:south-outline-sharp",
	});
}

export default Component;
