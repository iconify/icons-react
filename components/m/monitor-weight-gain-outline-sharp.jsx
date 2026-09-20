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
		"content": `<style>.n3cfczbzo {
  fill: currentColor;
  d: path("M18.5 22.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5 19V5zm-1 1V4h16v9.116h-1V5H5v14h8.116v1zm9.856-9.149q.76-.764.76-1.856q0-1.091-.765-1.85q-.764-.76-1.856-.76q-1.091 0-1.85.764t-.76 1.856t.764 1.85t1.856.76q1.091 0 1.85-.764M10 9.5v-1h1v1zm1.5 0v-1h1v1zm1.5 0v-1h1v1z");
}
</style><path class="n3cfczbzo"/>`,
		"fallback": "material-symbols-light:monitor-weight-gain-outline-sharp",
	});
}

export default Component;
