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
		"content": `<style>.ov3s02b9d {
  fill: currentColor;
  d: path("m12 21l-2.29-3.5H3V3h18v14.5h-6.71z");
}
</style><path class="ov3s02b9d"/>`,
		"fallback": "material-symbols-light:tooltip-sharp",
	});
}

export default Component;
