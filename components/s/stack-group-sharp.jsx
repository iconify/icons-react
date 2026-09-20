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
		"content": `<style>.bbukqtlin {
  fill: currentColor;
  d: path("M9 21v-6H3V3h12v6h6v12z");
}
</style><path class="bbukqtlin"/>`,
		"fallback": "material-symbols-light:stack-group-sharp",
	});
}

export default Component;
