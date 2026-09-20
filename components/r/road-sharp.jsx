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
		"content": `<style>.bw3rlgxxt {
  fill: currentColor;
  d: path("M5 19V5h1v14zm6.5 0v-3.077h1V19zm6.5 0V5h1v14zm-6.5-5.462v-3.076h1v3.077zm0-5.461V5h1v3.077z");
}
</style><path class="bw3rlgxxt"/>`,
		"fallback": "material-symbols-light:road-sharp",
	});
}

export default Component;
