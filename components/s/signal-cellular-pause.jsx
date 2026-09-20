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
		"content": `<style>.nxpg_bx2g {
  fill: currentColor;
  d: path("M2 22L22 2v11h-9v9zm17 0v-7h2v7zm-4 0v-7h2v7z");
}
</style><path class="nxpg_bx2g"/>`,
		"fallback": "material-symbols:signal-cellular-pause",
	});
}

export default Component;
