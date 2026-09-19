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
		"content": `<style>.i9_a3lb-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.44 4.51a17.2 17.2 0 0 0-5 .56A16.69 16.69 0 0 0 14.77 33L9.1 38.59a16.91 16.91 0 0 0 28.22-7.5A16.68 16.68 0 0 0 33.06 15l5.67-5.6a17 17 0 0 0-11.29-4.89");
}
</style><path class="i9_a3lb-p"/>`,
		"fallback": "arcticons:soundhound",
	});
}

export default Component;
