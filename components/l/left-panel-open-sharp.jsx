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
		"content": `<style>.lxluin9bm {
  fill: currentColor;
  d: path("M12.404 8.827v6.346L15.596 12zM9 19h10V5H9zm-5 1V4h16v16z");
}
</style><path class="lxluin9bm"/>`,
		"fallback": "material-symbols-light:left-panel-open-sharp",
	});
}

export default Component;
