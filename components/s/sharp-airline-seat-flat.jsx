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
		"content": `<style>.x9g9lgw2t {
  fill: currentColor;
  d: path("M22 7v6H9V7zM2 14v2h6v2h8v-2h6v-2zm5.14-1.9a3 3 0 0 0-.04-4.24a3 3 0 0 0-4.24.04a3 3 0 0 0 .04 4.24a3 3 0 0 0 4.24-.04");
}
</style><path class="x9g9lgw2t"/>`,
		"fallback": "ic:sharp-airline-seat-flat",
	});
}

export default Component;
