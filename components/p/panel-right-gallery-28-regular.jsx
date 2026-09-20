import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zj9o6f0xn {
  fill: currentColor;
  d: path("M22.247 4a3.75 3.75 0 0 1 3.75 3.75v11.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 19.25V7.75A3.75 3.75 0 0 1 5.75 4zm2.25 3.75a2.25 2.25 0 0 0-2.25-2.25H18.5V10h5.997zM18.5 15.5h5.997v-4H18.5zm0 1.5v4.5h3.747a2.25 2.25 0 0 0 2.25-2.25V17zM17 21.5v-16H5.75A2.25 2.25 0 0 0 3.5 7.75v11.5a2.25 2.25 0 0 0 2.25 2.25z");
}
</style><path class="zj9o6f0xn"/>`,
		"fallback": "fluent:panel-right-gallery-28-regular",
	});
}

export default Component;
