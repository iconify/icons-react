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
		"content": `<style>.md9y-bcnh {
  fill: currentColor;
  d: path("M8 21v-2h8v2zm0-3L6.825 3h10.35L16 18zm1.85-2h4.3L15 5H9zm0-11H9h6z");
}
</style><path class="md9y-bcnh"/>`,
		"fallback": "material-symbols:on-hub-device-outline-sharp",
	});
}

export default Component;
