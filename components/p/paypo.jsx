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
		"content": `<style>.y2yap8bbj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 26.643h15.857V42.5H5.5zm21.143 0H42.5V42.5H26.643zm0-21.143H42.5v15.857H26.643z");
}
</style><path class="y2yap8bbj"/>`,
		"fallback": "arcticons:paypo",
	});
}

export default Component;
