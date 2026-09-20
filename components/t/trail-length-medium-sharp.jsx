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
		"content": `<style>.a4rw0abob {
  fill: currentColor;
  d: path("M7.116 16.5v-1h6.134q-.754-.54-1.187-1.32t-.54-1.68H5.5v-1h6.023q.087-.825.501-1.614T13.25 8.5H7.5v-1H16q1.868 0 3.184 1.316Q20.5 10.13 20.5 11.997t-1.316 3.185T16 16.5zm-3.616 0v-1h2.616v1z");
}
</style><path class="a4rw0abob"/>`,
		"fallback": "material-symbols-light:trail-length-medium-sharp",
	});
}

export default Component;
