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
		"content": `<style>.tqz0xrkdc {
  fill: currentColor;
  d: path("M10.5 20V7H5V4h14v3h-5.5v13z");
}
</style><path class="tqz0xrkdc"/>`,
		"fallback": "material-symbols:title-outline",
	});
}

export default Component;
