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
		"content": `<style>.tw2rh4zot {
  fill: currentColor;
  d: path("M17.503 4.498L4.499 17.503a1.411 1.411 0 0 0 1.996 1.996L19.499 6.495a1.412 1.412 0 0 0-1.996-1.997M7.002 5a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4m10 10a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4");
}
</style><path class="tw2rh4zot"/>`,
		"fallback": "ic:round-percentage",
	});
}

export default Component;
