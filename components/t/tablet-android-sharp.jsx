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
		"content": `<style>.lf3vm6b4r {
  fill: currentColor;
  d: path("M4 22V2h16v20zm6.23-2.346h3.54v-.77h-3.54zM5 16.538h14V5.5H5z");
}
</style><path class="lf3vm6b4r"/>`,
		"fallback": "material-symbols-light:tablet-android-sharp",
	});
}

export default Component;
