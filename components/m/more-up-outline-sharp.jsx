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
		"content": `<style>.vu97qhbcd {
  fill: currentColor;
  d: path("M17.5 15.539V6.5H9v-1h9.5v10.039zm-5 5V11.5H4v-1h9.5v10.039z");
}
</style><path class="vu97qhbcd"/>`,
		"fallback": "material-symbols-light:more-up-outline-sharp",
	});
}

export default Component;
