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
		"content": `<style>.y9ohltbnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.73 22.4A10.55 10.55 0 1 0 29.27 33V4.5a10.55 10.55 0 0 0 10.55 10.55");
}
</style><path class="y9ohltbnz"/>`,
		"fallback": "arcticons:tiktok",
	});
}

export default Component;
