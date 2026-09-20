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
		"content": `<style>.r7rkcvc8r {
  fill: currentColor;
  d: path("M4 17v-1h11.423v1zm15.292-.904L15.158 12l4.134-4.077l.708.708L16.573 12L20 15.389zM4 12.5v-1h8.577v1zM4 8V7h11.423v1z");
}
</style><path class="r7rkcvc8r"/>`,
		"fallback": "material-symbols-light:menu-open-outline",
	});
}

export default Component;
