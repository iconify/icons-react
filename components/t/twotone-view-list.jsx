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
		"content": `<style>.gxz5v7tah {
  fill: currentColor;
  d: path("M3 5v14h18V5zm4 2v2H5V7zm-2 6v-2h2v2zm0 2h2v2H5zm14 2H9v-2h10zm0-4H9v-2h10zm0-4H9V7h10z");
}

.h1n5-_b6i {
  fill: currentColor;
  d: path("M7 7v2H5V7zm-2 6v-2h2v2zm0 2h2v2H5zm14 2H9v-2h10zm0-4H9v-2h10zm0-4H9V7h10z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="h1n5-_b6i"/><path class="gxz5v7tah"/>`,
		"fallback": "ic:twotone-view-list",
	});
}

export default Component;
