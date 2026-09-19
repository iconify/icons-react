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
		"content": `<style>.v9oelwbld {
  fill: currentColor;
  d: path("M11.4 1.02C6.62 1.33 3 5.52 3 10.31V20h6v-8H5v-1.71C5 6.45 7.96 3.11 11.79 3A7 7 0 0 1 19 10v2h-4v8h6V10c0-5.17-4.36-9.32-9.6-8.98");
}
</style><path class="v9oelwbld"/>`,
		"fallback": "ic:sharp-headset",
	});
}

export default Component;
