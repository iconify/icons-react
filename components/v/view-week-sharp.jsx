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
		"content": `<style>.igiik9b-m {
  fill: currentColor;
  d: path("M3 19V5h5.325v14zm6.33 0V5h5.345v14zm6.345 0V5H21v14z");
}
</style><path class="igiik9b-m"/>`,
		"fallback": "material-symbols-light:view-week-sharp",
	});
}

export default Component;
