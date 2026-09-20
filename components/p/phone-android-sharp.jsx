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
		"content": `<style>.ru4s_gs6x {
  fill: currentColor;
  d: path("M10.23 19.654h3.54v-.77h-3.54zM6 22V2h12v20zm1-5.462h10V5.5H7z");
}
</style><path class="ru4s_gs6x"/>`,
		"fallback": "material-symbols-light:phone-android-sharp",
	});
}

export default Component;
