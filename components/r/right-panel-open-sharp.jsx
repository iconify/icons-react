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
		"content": `<style>.ns2gsxwyc {
  fill: currentColor;
  d: path("M11.596 15.173V8.827L8.404 12zM5 19h10V5H5zm-1 1V4h16v16z");
}
</style><path class="ns2gsxwyc"/>`,
		"fallback": "material-symbols-light:right-panel-open-sharp",
	});
}

export default Component;
