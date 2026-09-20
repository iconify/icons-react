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
		"content": `<style>.o8p1ksbcv {
  fill: currentColor;
  d: path("M9.885 15.577L15.462 12L9.885 8.423zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="o8p1ksbcv"/>`,
		"fallback": "material-symbols-light:slideshow-outline-sharp",
	});
}

export default Component;
