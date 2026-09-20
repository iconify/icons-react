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
		"content": `<style>.gccnyv_vg {
  fill: currentColor;
  d: path("M3 10V3h6v4.277H7.723L8.885 10H7.846l-1.15-2.65H4V10zm1-3.65h4V4H4z");
}
</style><path class="gccnyv_vg"/>`,
		"fallback": "material-symbols-light:r-mobiledata-sharp",
	});
}

export default Component;
