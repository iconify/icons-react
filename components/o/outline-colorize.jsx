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
		"content": `<style>.gszzf0seu {
  fill: currentColor;
  d: path("m17.66 5.41l.92.92l-2.69 2.69l-.92-.92zM17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12l-1.93-1.91l-1.41 1.41l1.42 1.42L3 16.25V21h4.75l8.92-8.92l1.42 1.42l1.41-1.41l-1.92-1.92l3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29M6.92 19L5 17.08l8.06-8.06l1.92 1.92z");
}
</style><path class="gszzf0seu"/>`,
		"fallback": "ic:outline-colorize",
	});
}

export default Component;
