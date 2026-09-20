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
		"content": `<style>.ixsc8gb_e {
  fill: currentColor;
  d: path("M17 16V7H8V5h11v11zm-5 5v-9H3v-2h11v11z");
}
</style><path class="ixsc8gb_e"/>`,
		"fallback": "material-symbols:more-up-outline-sharp",
	});
}

export default Component;
