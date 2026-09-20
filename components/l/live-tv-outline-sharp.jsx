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
		"content": `<style>.dk1qlbbeh {
  fill: currentColor;
  d: path("m9.5 15.5l7-4.5l-7-4.5zM8 21v-2H2V3h20v16h-6v2zm-4-4h16V5H4zm0 0V5z");
}
</style><path class="dk1qlbbeh"/>`,
		"fallback": "material-symbols:live-tv-outline-sharp",
	});
}

export default Component;
