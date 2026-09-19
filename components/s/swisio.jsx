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
		"content": `<style>.wuu6b0bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 14.25l-4.875-4.875L4.5 24l14.625 14.625L33.75 24l-4.875-4.875l-9.75 9.75L14.25 24L28.875 9.375L43.5 24L28.875 38.625L24 33.75");
}
</style><path class="wuu6b0bbr"/>`,
		"fallback": "arcticons:swisio",
	});
}

export default Component;
