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
		"content": `<style>.j7f12cc1n {
  fill: currentColor;
  d: path("M19 13V4h3v9zM7.1 21L2 15.625L3.2 14.4l3.8.85V4.5q0-.625.438-1.062T8.5 3t1.063.438T10 4.5v6h1.4l5.775 2.9L16.1 21z");
}
</style><path class="j7f12cc1n"/>`,
		"fallback": "material-symbols:nest-wake-on-press-sharp",
	});
}

export default Component;
