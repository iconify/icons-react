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
		"content": `<style>.mwdaz89vd {
  fill: currentColor;
  d: path("m5.852 5.397l7 4.5a2.5 2.5 0 0 1 0 4.206l-7 4.5A2.5 2.5 0 0 1 2 16.5v-9a2.498 2.498 0 0 1 3.852-2.103M16 18V6a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0m4 0V6a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0");
}
</style><path class="mwdaz89vd"/>`,
		"fallback": "coolicons:play-pause-fill",
	});
}

export default Component;
