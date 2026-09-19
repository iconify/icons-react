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
		"content": `<style>.xz3dkdb-y {
  fill: currentColor;
  d: path("m14.5 11l-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z");
}
</style><path class="xz3dkdb-y"/>`,
		"fallback": "ic:sharp-charging-station",
	});
}

export default Component;
