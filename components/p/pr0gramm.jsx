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
		"content": `<style>.bg6-97biw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.12 7l17 17l-17 17l-4.62-4.67L17.83 24L5.5 11.67ZM24 41h18.5v-6.21H24Z");
}
</style><path class="bg6-97biw"/>`,
		"fallback": "arcticons:pr0gramm",
	});
}

export default Component;
