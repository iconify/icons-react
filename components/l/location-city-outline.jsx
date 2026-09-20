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
		"content": `<style>.gxr85w9pv {
  fill: currentColor;
  d: path("M3 21V7h6V5l3-3l3 3v6h6v10zm2-2h2v-2H5zm0-4h2v-2H5zm0-4h2V9H5zm6 8h2v-2h-2zm0-4h2v-2h-2zm0-4h2V9h-2zm0-4h2V5h-2zm6 12h2v-2h-2zm0-4h2v-2h-2z");
}
</style><path class="gxr85w9pv"/>`,
		"fallback": "material-symbols:location-city-outline",
	});
}

export default Component;
