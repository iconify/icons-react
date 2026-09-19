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
		"content": `<style>.vz2xvyb4k {
  fill: currentColor;
  d: path("M13 7h-2v2h2zm0 4h-2v6h2zM5 1v22h14V1zm12 18H7V5h10z");
}
</style><path class="vz2xvyb4k"/>`,
		"fallback": "ic:sharp-perm-device-information",
	});
}

export default Component;
