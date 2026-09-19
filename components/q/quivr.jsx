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
		"content": `<style>.rxzu2vbez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.607 32.812a21.498 21.498 0 1 1 .281-16.97M22.909 24l19.383 19.442");
}
</style><path class="rxzu2vbez"/>`,
		"fallback": "arcticons:quivr",
	});
}

export default Component;
