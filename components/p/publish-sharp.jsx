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
		"content": `<style>.vl6sv1blc {
  fill: currentColor;
  d: path("M11 20v-8.15l-2.6 2.6L7 13l5-5l5 5l-1.4 1.45l-2.6-2.6V20zM4 9V4h16v5h-2V6H6v3z");
}
</style><path class="vl6sv1blc"/>`,
		"fallback": "material-symbols:publish-sharp",
	});
}

export default Component;
