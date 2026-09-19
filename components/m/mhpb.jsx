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
		"content": `<style>.cnqels9ou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.903 36.46c16.417 0 21.69-23.475 21.69-30.96h12.503c0 12.759-8.76 37-34.193 37z");
}
</style><path class="cnqels9ou"/>`,
		"fallback": "arcticons:mhpb",
	});
}

export default Component;
