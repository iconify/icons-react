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
		"content": `<style>.w8a8facgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.94 19.56A4.44 4.44 0 1 1 4.5 24a4.44 4.44 0 0 1 4.44-4.44m12.37 0A4.44 4.44 0 1 1 16.87 24a4.44 4.44 0 0 1 4.44-4.44m12.37 0A4.44 4.44 0 1 1 29.24 24a4.44 4.44 0 0 1 4.44-4.44m9.82-7.09v23.06");
}
</style><path class="w8a8facgc"/>`,
		"fallback": "arcticons:masterpassword",
	});
}

export default Component;
