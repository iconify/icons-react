import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u8c_bfm9e {
  fill: currentColor;
  d: path("M10 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-13a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0");
}
</style><path class="u8c_bfm9e"/>`,
		"fallback": "fluent:radio-button-20-filled",
	});
}

export default Component;
