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
		"content": `<style>.kvw0yxrau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.474 9.641H43.5L24.474 38.359H43.5m-39-19.627h14.774L4.5 38.307h14.774");
}
</style><path class="kvw0yxrau"/>`,
		"fallback": "arcticons:naptime",
	});
}

export default Component;
