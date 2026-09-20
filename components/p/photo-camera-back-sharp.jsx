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
		"content": `<style>.qd_h5fbka {
  fill: currentColor;
  d: path("M2 21V5h5.15L9 3h6l1.85 2H22v16zm4-4h12l-3.75-5l-3 4L9 13z");
}
</style><path class="qd_h5fbka"/>`,
		"fallback": "material-symbols:photo-camera-back-sharp",
	});
}

export default Component;
