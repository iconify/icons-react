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
		"content": `<style>.vh5k6c_dg {
  fill: currentColor;
  d: path("M3 8V3h18v5zm0 13V10h18v11z");
}
</style><path class="vh5k6c_dg"/>`,
		"fallback": "material-symbols:toolbar-sharp",
	});
}

export default Component;
