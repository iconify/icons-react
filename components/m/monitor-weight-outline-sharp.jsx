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
		"content": `<style>.zjttvh8ia {
  fill: currentColor;
  d: path("M13.856 10.851q.76-.764.76-1.856q0-1.091-.765-1.85q-.764-.76-1.856-.76q-1.091 0-1.85.764t-.76 1.856t.764 1.85t1.856.76q1.091 0 1.85-.764M10 9.5v-1h1v1zm1.5 0v-1h1v1zm1.5 0v-1h1v1zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="zjttvh8ia"/>`,
		"fallback": "material-symbols-light:monitor-weight-outline-sharp",
	});
}

export default Component;
