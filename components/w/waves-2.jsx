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
		"content": `<style>.srmlhsspr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 26c-4.874 0-4.874-4-9.749-4s-4.873 4-9.746 4c-4.876 0-4.876-4-9.752-4S9.375 26 4.5 26m39 10c-4.874 0-4.874-4-9.749-4s-4.873 4-9.746 4c-4.876 0-4.876-4-9.752-4S9.375 36 4.5 36m39-20c-4.874 0-4.874-4-9.749-4s-4.873 4-9.746 4c-4.876 0-4.876-4-9.752-4S9.375 16 4.5 16");
}
</style><path class="srmlhsspr"/>`,
		"fallback": "arcticons:waves-2",
	});
}

export default Component;
