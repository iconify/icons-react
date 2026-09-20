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
		"content": `<style>.er16v3lvg {
  fill: currentColor;
  d: path("M4 10.5V4h6.5v6.5zM4 20v-6.5h6.5V20zm9.5-9.5V4H20v6.5zm0 9.5v-6.5H20V20z");
}
</style><path class="er16v3lvg"/>`,
		"fallback": "material-symbols-light:view-cozy-sharp",
	});
}

export default Component;
