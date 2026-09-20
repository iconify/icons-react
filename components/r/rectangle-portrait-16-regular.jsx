import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sj0-uvi8j {
  fill: currentColor;
  d: path("M5.5 15A2.5 2.5 0 0 1 3 12.5v-9A2.5 2.5 0 0 1 5.5 1h5A2.5 2.5 0 0 1 13 3.5v9a2.5 2.5 0 0 1-2.5 2.5zM4 12.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 2h-5A1.5 1.5 0 0 0 4 3.5z");
}
</style><path class="sj0-uvi8j"/>`,
		"fallback": "fluent:rectangle-portrait-16-regular",
	});
}

export default Component;
