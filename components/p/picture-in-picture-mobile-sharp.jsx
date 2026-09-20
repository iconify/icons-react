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
		"content": `<style>.evkeupb5s {
  fill: currentColor;
  d: path("M19 21H5V3h14zm-2.039-8.308V5H11.27v7.692z");
}
</style><path class="evkeupb5s"/>`,
		"fallback": "material-symbols-light:picture-in-picture-mobile-sharp",
	});
}

export default Component;
