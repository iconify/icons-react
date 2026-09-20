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
		"content": `<style>.pnc0zpvjb {
  fill: currentColor;
  d: path("m12 19l-7-7l7-7l7 7zm0-2.85L16.15 12L12 7.85L7.85 12zM12 12");
}
</style><path class="pnc0zpvjb"/>`,
		"fallback": "material-symbols:stat-0-outline-sharp",
	});
}

export default Component;
