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
		"content": `<style>.om7i8tbvs {
  fill: currentColor;
  d: path("m7.5 16l4-4l-4-4zM5 19h9V5H5zm-2 2V3h18v18z");
}
</style><path class="om7i8tbvs"/>`,
		"fallback": "material-symbols:right-panel-close-sharp",
	});
}

export default Component;
