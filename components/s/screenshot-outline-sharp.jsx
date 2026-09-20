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
		"content": `<style>.w08u_jb6x {
  fill: currentColor;
  d: path("M16 15h-2v3h-3v2h5zM8 9h2V6h3V4H8zM5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm0 0V3z");
}
</style><path class="w08u_jb6x"/>`,
		"fallback": "material-symbols:screenshot-outline-sharp",
	});
}

export default Component;
