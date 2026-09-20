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
		"content": `<style>.z_3gzwbwk {
  fill: currentColor;
  d: path("M3 23V1h2v2h14V1h2v22h-2v-2H5v2zm2-12h2V7h6v4h6V5H5zm0 8h6v-4h6v4h2v-6H5zm4-8h2V9H9zm4 8h2v-2h-2zm-4-8h2zm4 8h2z");
}
</style><path class="z_3gzwbwk"/>`,
		"fallback": "material-symbols:shelves-outline",
	});
}

export default Component;
