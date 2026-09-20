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
		"content": `<style>.y8uvlibxn {
  fill: currentColor;
  d: path("M13 19L2 12l11-7l-3.425 6H22v2H9.575z");
}
</style><path class="y8uvlibxn"/>`,
		"fallback": "material-symbols:line-start-arrow-notch-outline-sharp",
	});
}

export default Component;
