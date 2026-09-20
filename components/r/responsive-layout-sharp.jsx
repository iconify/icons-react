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
		"content": `<style>.w1yjc8buj {
  fill: currentColor;
  d: path("M16 21V8H9.5V3H21v18zm-6.5 0V10H14v11zM3 21V10h4.5v11z");
}
</style><path class="w1yjc8buj"/>`,
		"fallback": "material-symbols:responsive-layout-sharp",
	});
}

export default Component;
