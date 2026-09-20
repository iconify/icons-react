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
		"content": `<style>.x38s-hs_i {
  fill: currentColor;
  d: path("M5.438 19.563Q5 19.125 5 18.5v-3q0-.625.438-1.062T6.5 14t1.063.438T8 15.5v3q0 .625-.437 1.063T6.5 20t-1.062-.437");
}
</style><path class="x38s-hs_i"/>`,
		"fallback": "material-symbols:signal-cellular-alt-1-bar-outline-rounded",
	});
}

export default Component;
