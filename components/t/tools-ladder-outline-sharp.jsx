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
		"content": `<style>.s435_wswk {
  fill: currentColor;
  d: path("m4.7 21l5-18h2l-.85 3h5.625l.825-3h2l-5 18h-2l.85-3H7.525L6.7 21zm4.775-10h5.6l.825-3h-5.6zM8.1 16h5.6l.825-3h-5.6z");
}
</style><path class="s435_wswk"/>`,
		"fallback": "material-symbols:tools-ladder-outline-sharp",
	});
}

export default Component;
