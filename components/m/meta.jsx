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
		"content": `<style>.a0dsw9jjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 18.657c-2.498-4.025-5.528-7.102-9.021-7.102S4.5 16.182 4.5 27.007c0 7.98 2.151 9.438 4.441 9.438c5.899 0 12.168-12.19 15.059-17.788m0 0c2.498-4.025 5.529-7.102 9.021-7.102S43.5 16.182 43.5 27.007c0 7.98-2.151 9.438-4.441 9.438c-5.899 0-12.168-12.19-15.059-17.788");
}
</style><path class="a0dsw9jjr"/>`,
		"fallback": "arcticons:meta",
	});
}

export default Component;
