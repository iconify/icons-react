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
		"content": `<style>.u0h1046ow {
  fill: currentColor;
  d: path("M22.874 19.514A1 1 0 0 1 22 21H2a1 1 0 0 1-.874-1.486l10-18a1 1 0 0 1 1.748 0Z");
}
</style><path class="u0h1046ow"/>`,
		"fallback": "coolicons:triangle-fill-sharp",
	});
}

export default Component;
