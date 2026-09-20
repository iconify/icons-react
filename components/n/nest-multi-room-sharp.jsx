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
		"content": `<style>.ef4fxjtok {
  fill: currentColor;
  d: path("m4 9l8-6l8 6zm0 12v-4h9v4zm11 0v-4h5v4zM4 15v-4h5v4zm7 0v-4h9v4z");
}
</style><path class="ef4fxjtok"/>`,
		"fallback": "material-symbols:nest-multi-room-sharp",
	});
}

export default Component;
