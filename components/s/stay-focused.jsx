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
		"content": `<style>.wnrjn5bzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 20.698a1.693 1.693 0 0 0-1.69 1.69a1.69 1.69 0 0 0 .914 1.498l-.641 2.927h2.834l-.641-2.926c.56-.29.912-.868.914-1.499a1.693 1.693 0 0 0-1.69-1.69m17.745-6.948v20.5L24 44.5L6.255 34.25m9.061-5.211V18.962L24 13.925l8.684 5.037l9.06-5.212L24 3.5L6.255 13.75v20.5L24 34.077l8.684-5.038V18.962z");
}
</style><path class="wnrjn5bzb"/>`,
		"fallback": "arcticons:stay-focused",
	});
}

export default Component;
