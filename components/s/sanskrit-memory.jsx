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
		"content": `<style>.s9d4_7bpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h37m-10.57 0v37m0-21.14H12.105l3.965 3.965V5.5");
}
</style><path class="s9d4_7bpb"/>`,
		"fallback": "arcticons:sanskrit-memory",
	});
}

export default Component;
