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
		"content": `<style>.vgnj2623o {
  fill: currentColor;
  d: path("M13 19L2 12l11-7v6h9v2h-9zm-2-3.65v-6.7L5.725 12zM11 12");
}
</style><path class="vgnj2623o"/>`,
		"fallback": "material-symbols:line-start-arrow-outline-sharp",
	});
}

export default Component;
