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
		"content": `<style>.f64d3xbnq {
  fill: currentColor;
  d: path("M1 12V7h1.5v2.45l2.975-2.975l1.05 1.05L3.55 10.5H6V12zm6.525-5.475l-1.05-1.05L9.45 2.5H7V1h5v5h-1.5V3.55zM13.575 23L7.6 17l1.575-1.625l2.825.8V7h2v11.825l-2.425-.675l2.85 2.85H21v-7h2v9zM15 16v-5h2v5zm3 0v-4h2v4zm-.5 2");
}
</style><path class="f64d3xbnq"/>`,
		"fallback": "material-symbols:pinch-zoom-out-outline-sharp",
	});
}

export default Component;
