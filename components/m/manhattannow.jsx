import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e1f_x7eiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.997 18.688S17.73-.084 23.013 7.164c3.904 5.355-17.899 34.35-16.017 34.57c0 0 12.18-30.886 20.02-34.57c2.031-.952 4.666-.434 4.005 7.683c-.689 8.488-12.012 26.887-12.012 26.887C20.546 38.2 30.096 6.914 39.029 7.23c8.5.3-11.868 31.089-8.993 34.504c2.543 3.015 8.993-3.841 8.993-3.841");
}
</style><path class="e1f_x7eiy"/>`,
		"fallback": "arcticons:manhattannow",
	});
}

export default Component;
