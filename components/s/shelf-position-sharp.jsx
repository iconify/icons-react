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
		"content": `<style>.y_2g1tawm {
  fill: currentColor;
  d: path("M3 21v-5h18v5zm13.5-7V3H21v11zM3 14V3h4.5v11zm6.5 0V3h5v11z");
}
</style><path class="y_2g1tawm"/>`,
		"fallback": "material-symbols:shelf-position-sharp",
	});
}

export default Component;
