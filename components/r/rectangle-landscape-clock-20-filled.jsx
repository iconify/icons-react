import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eiv_6bm1d {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m.5-6a3 3 0 0 1 3 3v3.257A5.5 5.5 0 0 0 9.208 16H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5");
}
</style><path class="eiv_6bm1d"/>`,
		"fallback": "fluent:rectangle-landscape-clock-20-filled",
	});
}

export default Component;
