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
		"content": `<style>.r4dn2jb5k {
  fill: currentColor;
  d: path("M5 16h10l-3.45-4.5l-2.3 3l-1.55-2zm-3 4V4h16v6.5l4-4v11l-4-4V20z");
}
</style><path class="r4dn2jb5k"/>`,
		"fallback": "material-symbols:video-camera-back-sharp",
	});
}

export default Component;
