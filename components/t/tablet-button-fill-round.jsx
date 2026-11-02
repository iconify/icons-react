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
		"content": `<style>.akpibvbqe {
  fill: currentColor;
  d: path("M3 7a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5Zm9.01 10H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="akpibvbqe"/>`,
		"fallback": "coolicons:tablet-button-fill-round",
	});
}

export default Component;
