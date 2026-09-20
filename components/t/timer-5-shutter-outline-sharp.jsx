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
		"content": `<style>.hag7awbyq {
  fill: currentColor;
  d: path("M8.885 18.116v-1.231h6v-4.27h-6v-6.73h7.23v1.23h-6v4.27h6v6.73z");
}
</style><path class="hag7awbyq"/>`,
		"fallback": "material-symbols-light:timer-5-shutter-outline-sharp",
	});
}

export default Component;
