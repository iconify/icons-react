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
		"content": `<style>.iptlssi9r {
  fill: currentColor;
  d: path("M3 19V5h3v14zm4 0V5h10v14zm11 0V5h3v14zm-9-2h6V7H9zm3-5");
}
</style><path class="iptlssi9r"/>`,
		"fallback": "material-symbols:view-array-outline-sharp",
	});
}

export default Component;
