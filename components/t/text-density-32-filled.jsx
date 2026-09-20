import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ko1z8-bof {
  fill: currentColor;
  d: path("M17 3a1 1 0 1 0-2 0v26a1 1 0 1 0 2 0zm2.5 5h6a2.5 2.5 0 0 1 0 5h-6zm6 11h-6v5h6a2.5 2.5 0 0 0 0-5M3 5a1 1 0 0 0 0 2h10.5V5zM2 26a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2zm-1-4a1 1 0 0 1 1-1h10.5v2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h10.5v-2z");
}
</style><path class="ko1z8-bof"/>`,
		"fallback": "fluent:text-density-32-filled",
	});
}

export default Component;
