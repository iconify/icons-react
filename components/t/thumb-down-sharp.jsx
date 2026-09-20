import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s4d7iwbmc {
  fill: currentColor;
  d: path("M1 16v-4.4L4.65 3H16v13l-7 7l-1.85-1.85L8.45 16zm17 0V3h4v13z");
}
</style><path class="s4d7iwbmc"/>`,
		"fallback": "material-symbols:thumb-down-sharp",
	});
}

export default Component;
