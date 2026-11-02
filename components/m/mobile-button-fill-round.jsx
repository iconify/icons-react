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
		"content": `<style>.f2oqqhw1r {
  fill: currentColor;
  d: path("M6 7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5Zm6.01 10H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="f2oqqhw1r"/>`,
		"fallback": "coolicons:mobile-button-fill-round",
	});
}

export default Component;
