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
		"content": `<style>.mitvq_bxp {
  fill: currentColor;
  d: path("M2.73 4h18.54L12 20zm1.745 1l2.033 3.5h10.984L19.525 5zm2.612 4.5l2.302 4h5.223l2.301-4zm2.88 5L12 18l2.033-3.5z");
}
</style><path class="mitvq_bxp"/>`,
		"fallback": "material-symbols-light:tornado-outline",
	});
}

export default Component;
