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
		"content": `<style>.co-hv1bmq {
  fill: currentColor;
  d: path("M7.885 19.116v-13h-5V4.885h11.23v1.23h-5v13zm9 0v-8h-3V9.885h7.23v1.23h-3v8z");
}
</style><path class="co-hv1bmq"/>`,
		"fallback": "material-symbols-light:text-fields-outline-sharp",
	});
}

export default Component;
