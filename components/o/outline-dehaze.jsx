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
		"content": `<style>.otruaepyy {
  fill: currentColor;
  d: path("M2 16v2h20v-2zm0-5v2h20v-2zm0-5v2h20V6z");
}
</style><path class="otruaepyy"/>`,
		"fallback": "ic:outline-dehaze",
	});
}

export default Component;
