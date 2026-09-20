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
		"content": `<style>.ecos1xb5k {
  fill: currentColor;
  d: path("M8.885 18.116v-1.231h5.384q.27 0 .443-.174t.173-.442v-3.038q0-.27-.173-.442t-.443-.173H8.885V5.885h7.23v1.23h-6v4.27h4.154q.77 0 1.308.538t.539 1.308v3.038q0 .77-.539 1.308t-1.308.538z");
}
</style><path class="ecos1xb5k"/>`,
		"fallback": "material-symbols-light:timer-5-shutter-outline",
	});
}

export default Component;
