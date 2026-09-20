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
		"content": `<style>.ci9-hrshr {
  fill: currentColor;
  d: path("M4 24c0-5.523 4.477-10 10-10h20c5.523 0 10 4.477 10 10s-4.477 10-10 10H14C8.477 34 4 29.523 4 24m5.5 0a5 5 0 1 0 10 0a5 5 0 0 0-10 0");
}
</style><path class="ci9-hrshr"/>`,
		"fallback": "fluent:toggle-left-48-filled",
	});
}

export default Component;
