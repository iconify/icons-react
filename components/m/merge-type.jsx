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
		"content": `<style>.a6lx8wb9r {
  fill: currentColor;
  d: path("M16.6 20L11 14.4V6.875l-2.6 2.6L6.975 8.05L12 3.025l5 5l-1.425 1.425L13 6.875V13.6l5 5zm-9.2.025l-1.4-1.4l3.175-3.2L10.6 16.85z");
}
</style><path class="a6lx8wb9r"/>`,
		"fallback": "material-symbols:merge-type",
	});
}

export default Component;
