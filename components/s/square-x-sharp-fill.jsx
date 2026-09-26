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
		"content": `<style>.jb03xai3q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM14.5858 8.0001L12 10.5859L9.4141 8.0002L8.0001 9.4142L10.5859 12L8.0002 14.5859L9.4142 15.9999L12 13.4141L14.5859 15.9998L15.9999 14.5858L13.4141 12L15.9998 9.4141L14.5858 8.0001Z");
}
</style><path clip-rule="evenodd" class="jb03xai3q"/>`,
		"fallback": "keyline-icons:square-x-sharp-fill",
	});
}

export default Component;
