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
		"content": `<style>.gpsqs2btq {
  fill: currentColor;
  d: path("M2 20V4h20v16zm14.225-5.187Q18 13.625 18 12t-1.775-2.812T12 8T7.775 9.188T6 12t1.775 2.813T12 16t4.225-1.187");
}
</style><path class="gpsqs2btq"/>`,
		"fallback": "material-symbols:vignette-sharp",
	});
}

export default Component;
