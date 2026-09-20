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
		"content": `<style>.ne6zcz2tb {
  fill: currentColor;
  d: path("M6 17h9v-3H6zm-3 4V3h18v18z");
}
</style><path class="ne6zcz2tb"/>`,
		"fallback": "material-symbols:position-bottom-left-sharp",
	});
}

export default Component;
