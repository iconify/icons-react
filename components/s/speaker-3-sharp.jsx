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
		"content": `<style>.alppr7vxf {
  fill: currentColor;
  d: path("M8.692 21v-1H4.981V3H19v17h-3.73v1z");
}
</style><path class="alppr7vxf"/>`,
		"fallback": "material-symbols-light:speaker-3-sharp",
	});
}

export default Component;
