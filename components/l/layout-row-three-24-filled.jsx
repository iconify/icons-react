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
		"content": `<style>.pjoy_hbvd {
  fill: currentColor;
  d: path("M21 14.5v-5H3v5zM3 16v1.75A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V16zm18-9.75V8H3V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25");
}
</style><path class="pjoy_hbvd"/>`,
		"fallback": "fluent:layout-row-three-24-filled",
	});
}

export default Component;
