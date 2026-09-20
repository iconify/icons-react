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
		"content": `<style>.pdqs7_96h {
  fill: currentColor;
  d: path("M3 11V3h18v8zm2-2h14V5H5zM3 21v-8h18v8zm2-2h14v-4H5zM5 9V5zm0 10v-4z");
}
</style><path class="pdqs7_96h"/>`,
		"fallback": "material-symbols:splitscreen-outline-sharp",
	});
}

export default Component;
