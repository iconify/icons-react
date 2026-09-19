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
		"content": `<style>.fmv0oy0qj {
  fill: currentColor;
  d: path("m22 10l-6-6H2v16h20zm-7-4.5l5.5 5.5H15z");
}
</style><path class="fmv0oy0qj"/>`,
		"fallback": "ic:sharp-note",
	});
}

export default Component;
