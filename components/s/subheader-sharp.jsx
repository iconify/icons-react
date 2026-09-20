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
		"content": `<style>.bopwhvbfp {
  fill: currentColor;
  d: path("M6 10h9V7H6zM3 21V3h18v18z");
}
</style><path class="bopwhvbfp"/>`,
		"fallback": "material-symbols:subheader-sharp",
	});
}

export default Component;
