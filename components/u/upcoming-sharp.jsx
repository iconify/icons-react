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
		"content": `<style>.j0d2o1hkn {
  fill: currentColor;
  d: path("M3 20v-7h5.23q.328 1.327 1.376 2.164T12 16q1.385 0 2.433-.836q1.048-.837 1.336-2.164H21v7zm14.408-9.315l-.708-.708l2.858-2.858l.707.708zm-10.816 0L3.735 7.826l.707-.708L7.3 9.977zM11.5 8.038v-4h1v4z");
}
</style><path class="j0d2o1hkn"/>`,
		"fallback": "material-symbols-light:upcoming-sharp",
	});
}

export default Component;
