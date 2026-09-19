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
		"content": `<style>.srk9s2h0i {
  fill: currentColor;
  d: path("M3 21h8V3H3zM21 3h-8v8h8zm-8 18h8v-8h-8z");
}
</style><path class="srk9s2h0i"/>`,
		"fallback": "ic:sharp-auto-awesome-mosaic",
	});
}

export default Component;
