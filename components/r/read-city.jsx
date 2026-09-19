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
		"content": `<style>.u16_n90iw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.625 34.5l-3.5-21H40l3.5 21zM22.5 13.5l-1.75 21H4.5v-21zm7.625 21v-21H27l-1.75 21zm7 0v-21h-5v21z");
}
</style><path class="u16_n90iw"/>`,
		"fallback": "arcticons:read-city",
	});
}

export default Component;
