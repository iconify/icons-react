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
		"content": `<style>.f6e0z0b8x {
  fill: currentColor;
  d: path("M11 21V6.825L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825V9q0 1.6.663 2.937t1.6 2.375t1.962 1.788T19 17.275l-1.45 1.45q-1.425-.875-2.575-1.888T13 14.7V21z");
}
</style><path class="f6e0z0b8x"/>`,
		"fallback": "material-symbols:ramp-left-sharp",
	});
}

export default Component;
