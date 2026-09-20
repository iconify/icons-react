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
		"content": `<style>.cba9kcbbh {
  fill: currentColor;
  d: path("M9.885 15.577L15.462 12L9.885 8.423zM4 20V4h16v16z");
}
</style><path class="cba9kcbbh"/>`,
		"fallback": "material-symbols-light:slideshow-sharp",
	});
}

export default Component;
