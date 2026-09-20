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
		"content": `<style>.y9mw98ilc {
  fill: currentColor;
  d: path("M2 22L22 2v20zm15-2h3V6.85l-3 3z");
}
</style><path class="y9mw98ilc"/>`,
		"fallback": "material-symbols:network-cell-outline",
	});
}

export default Component;
