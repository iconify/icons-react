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
		"content": `<style>.khand1ldd {
  fill: currentColor;
  d: path("M5 19V8.77h3V19zM5 8V5h3v3zm5.52 11l-.02-7.461h3V19zm-.02-8.23v-3h3v3zM16 19v-4.673h3V19zm0-5.442v-3h3v3z");
}
</style><path class="khand1ldd"/>`,
		"fallback": "material-symbols-light:stacked-bar-chart-outline",
	});
}

export default Component;
