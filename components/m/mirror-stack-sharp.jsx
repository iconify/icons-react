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
		"content": `<style>.dy_u6hb4r {
  fill: currentColor;
  d: path("M5 21V6.789h8.423V21zm10.616-3.77V4.597h-5.039V3H19v14.23z");
}
</style><path class="dy_u6hb4r"/>`,
		"fallback": "material-symbols-light:mirror-stack-sharp",
	});
}

export default Component;
