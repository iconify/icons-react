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
		"content": `<style>.r0r5mrb_e {
  fill: currentColor;
  d: path("M3 14.5v-1h4.058v1zm0-4v-1h17v1zm6.442 4v-1h4.116v1zm6.5 0v-1H20v1z");
}
</style><path class="r0r5mrb_e"/>`,
		"fallback": "material-symbols-light:power-input-outline-sharp",
	});
}

export default Component;
