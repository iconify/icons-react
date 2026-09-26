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
		"content": `<style>.z_o34ob-y {
  fill: currentColor;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM6.2502 8.9142L9.3359 12L6.2502 15.0859L7.6642 16.4999L11.457 12.707C11.8475 12.3165 11.8475 11.6835 11.457 11.293L7.6642 7.5002L6.2502 8.9142ZM12.2502 8.9142L15.3359 12L12.2502 15.0859L13.6642 16.4999L17.457 12.707C17.8475 12.3165 17.8475 11.6835 17.457 11.293L13.6642 7.5002L12.2502 8.9142Z");
}
</style><path class="z_o34ob-y"/>`,
		"fallback": "keyline-icons:square-chevrons-right-sharp-fill",
	});
}

export default Component;
