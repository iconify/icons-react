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
		"content": `<style>.c33zsnbjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.371 24l-15.613-9.128V4.5l24.484 14.314");
}

.in_pr1bit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.242 18.814L11.758 33.128V43.5l24.484-14.314z");
}
</style><path class="in_pr1bit"/><path class="c33zsnbjf"/>`,
		"fallback": "arcticons:kolumbus-billett",
	});
}

export default Component;
