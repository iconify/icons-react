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
		"content": `<style>.k4bld7bti {
  fill: currentColor;
  d: path("M5 19H4l-.65-2H2v-7h2V5h16v5h2v7h-1.35L20 19h-1l-.65-2H5.65zm8-9h5V7h-5zm-7 0h5V7H6zm-2 5h16v-3H4zm16 0H4z");
}
</style><path class="k4bld7bti"/>`,
		"fallback": "material-symbols:king-bed-outline-sharp",
	});
}

export default Component;
