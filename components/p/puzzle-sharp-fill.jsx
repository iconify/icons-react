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
		"content": `<style>.mrdiv-47j {
  fill: currentColor;
  d: path("M10 2C12.2092 2 14 3.79082 14 6H17C17.5523 6 18 6.44772 18 7V10C20.2092 10 22 11.7908 22 14C22 16.2092 20.2092 18 18 18V21C18 21.5523 17.5523 22 17 22H3C2.44772 22 2 21.5523 2 21V17C2 16.4477 2.44772 16 3 16H4C5.10462 16 6 15.1046 6 14C6 12.8954 5.10462 12 4 12H3C2.44772 12 2 11.5523 2 11V7C2 6.44772 2.44772 6 3 6H6C6 3.79082 7.79082 2 10 2Z");
}
</style><path class="mrdiv-47j"/>`,
		"fallback": "keyline-icons:puzzle-sharp-fill",
	});
}

export default Component;
