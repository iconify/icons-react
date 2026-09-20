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
		"content": `<style>.erykg3e5e {
  fill: currentColor;
  d: path("M7.5 6.401V4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2.401A3 3 0 0 1 18 9v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a3 3 0 0 1-1.5 2.599V20a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2.401A3 3 0 0 1 6 15V9a3 3 0 0 1 1.5-2.599m2-2.901A.5.5 0 0 0 9 4v2h6V4a.5.5 0 0 0-.5-.5zm7 11.5V9A1.5 1.5 0 0 0 15 7.5H9A1.5 1.5 0 0 0 7.5 9v6A1.5 1.5 0 0 0 9 16.5h6a1.5 1.5 0 0 0 1.5-1.5M9 20a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2H9z");
}
</style><path class="erykg3e5e"/>`,
		"fallback": "fluent:smartwatch-24-regular",
	});
}

export default Component;
