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
		"content": `<style>.witobzg0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.1 4.5L40.9 24L17.64 37.42v-7L28.76 24l-15.6-9v25L7.1 43.5Z");
}
</style><path class="witobzg0h"/>`,
		"fallback": "arcticons:newpipe",
	});
}

export default Component;
