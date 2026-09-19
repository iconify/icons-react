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
		"content": `<style>.g61xclbgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.1 6.6h-5.6l-4.8 3.5V6.6h-10l-4.9 3.7V6.6H5.5v34.8l7.3-7.1V14h7.5v27.4l7.4-7.7V14h7.4v27l7.4-7.7V6.6z");
}
</style><path class="g61xclbgu"/>`,
		"fallback": "arcticons:mucke",
	});
}

export default Component;
