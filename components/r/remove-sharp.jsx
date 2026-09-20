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
		"content": `<style>.vgaa_3bxl {
  fill: currentColor;
  d: path("M6 12.5v-1h12v1z");
}
</style><path class="vgaa_3bxl"/>`,
		"fallback": "material-symbols-light:remove-sharp",
	});
}

export default Component;
