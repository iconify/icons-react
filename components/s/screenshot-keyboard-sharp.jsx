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
		"content": `<style>.g_cxtab2o {
  fill: currentColor;
  d: path("M14.825 14.825Q16 13.65 16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16t2.825-1.175M2 20V4h20v16z");
}
</style><path class="g_cxtab2o"/>`,
		"fallback": "material-symbols:screenshot-keyboard-sharp",
	});
}

export default Component;
