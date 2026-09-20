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
		"content": `<style>.tu5ioprzj {
  fill: currentColor;
  d: path("M4 20V4h16v16zM5 8h14V5H5zm14 1H5v10h14zM5 8v1zm0 0V5zm0 1v10z");
}
</style><path class="tu5ioprzj"/>`,
		"fallback": "material-symbols-light:toolbar-outline-sharp",
	});
}

export default Component;
