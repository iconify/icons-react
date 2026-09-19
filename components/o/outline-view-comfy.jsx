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
		"content": `<style>.wyw1ad8sz {
  fill: currentColor;
  d: path("M2 4v16h20V4zm2 2h16v5H4zm0 12v-5h4v5zm6 0v-5h10v5z");
}
</style><path class="wyw1ad8sz"/>`,
		"fallback": "ic:outline-view-comfy",
	});
}

export default Component;
