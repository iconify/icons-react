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
		"content": `<style>.ykwu1pbea {
  fill: currentColor;
  d: path("M6 21L2 9l10-7l10 7l-4 12z");
}
</style><path class="ykwu1pbea"/>`,
		"fallback": "material-symbols:pentagon-sharp",
	});
}

export default Component;
