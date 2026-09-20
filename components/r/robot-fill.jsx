import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k3d2pcbmi {
  fill: currentColor;
  d: path("M200 48h-64V16a8 8 0 0 0-16 0v32H56a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V80a32 32 0 0 0-32-32m-28 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-76 88H80a16 16 0 0 1 0-32h16Zm-12-64a12 12 0 1 1 12-12a12 12 0 0 1-12 12m60 64h-32v-32h32Zm32 0h-16v-32h16a16 16 0 0 1 0 32");
}
</style><path class="k3d2pcbmi"/>`,
		"fallback": "ph:robot-fill",
	});
}

export default Component;
