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
		"content": `<style>.d1jm2ob_d {
  fill: currentColor;
  d: path("M3 21V3h18v18zm8-4h2l2-7.975V7H9v2h4z");
}
</style><path class="d1jm2ob_d"/>`,
		"fallback": "material-symbols:looks-7-sharp",
	});
}

export default Component;
