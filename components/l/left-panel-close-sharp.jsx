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
		"content": `<style>.x8g0jsbgp {
  fill: currentColor;
  d: path("M15.596 15.173V8.827L12.404 12zM9 19h10V5H9zm-5 1V4h16v16z");
}
</style><path class="x8g0jsbgp"/>`,
		"fallback": "material-symbols-light:left-panel-close-sharp",
	});
}

export default Component;
