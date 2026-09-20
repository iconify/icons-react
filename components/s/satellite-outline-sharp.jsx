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
		"content": `<style>.qki51ig4f {
  fill: currentColor;
  d: path("M6 17h12l-3.75-5l-3 4L9 13zm0-5q2.5 0 4.25-1.75T12 6h-1.7q0 1.8-1.25 3.05T6 10.3zm0-3.4q1.075 0 1.813-.763T8.55 6H6zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="qki51ig4f"/>`,
		"fallback": "material-symbols:satellite-outline-sharp",
	});
}

export default Component;
