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
		"content": `<style>.getdngoom {
  fill: currentColor;
  d: path("M21 12C21 16.8325 16.8325 21 12 21C7.1675 21 3 16.8325 3 12C3 7.1675 7.1675 3 12 3C16.8325 3 21 7.1675 21 12Z");
}
</style><path class="getdngoom"/>`,
		"fallback": "keyline-icons:record-sharp-fill",
	});
}

export default Component;
