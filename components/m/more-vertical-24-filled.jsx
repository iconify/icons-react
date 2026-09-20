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
		"content": `<style>.w40n5i41d {
  fill: currentColor;
  d: path("M12 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-2 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="w40n5i41d"/>`,
		"fallback": "fluent:more-vertical-24-filled",
	});
}

export default Component;
