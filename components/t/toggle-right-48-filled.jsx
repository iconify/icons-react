import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ng6vk_b1x {
  fill: currentColor;
  d: path("M44 24c0-5.523-4.477-10-10-10H14C8.477 14 4 18.477 4 24s4.477 10 10 10h20c5.523 0 10-4.477 10-10m-5.5 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0");
}
</style><path class="ng6vk_b1x"/>`,
		"fallback": "fluent:toggle-right-48-filled",
	});
}

export default Component;
