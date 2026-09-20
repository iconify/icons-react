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
		"content": `<style>.egm-z5ypv {
  fill: currentColor;
  d: path("M15.596 15.173V8.827L12.404 12zM5 19h3V5H5zm4 0h10V5H9zm-1 0H5zm-4 1V4h16v16z");
}
</style><path class="egm-z5ypv"/>`,
		"fallback": "material-symbols-light:left-panel-close-outline-sharp",
	});
}

export default Component;
