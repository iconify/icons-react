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
		"content": `<style>.lebkasbbf {
  fill: currentColor;
  d: path("M13 22v-4l4-1l-4-1v-4l10 5zM3 21v-5.8q1.2 0 2.1-.762T6 12.5t-.9-1.937T3 9.8V4h6q0-1.05.725-1.775T11.5 1.5t1.775.725T14 4h6v9.25l-9-4.5v9.3q-1 .2-1.6.938T8.8 21z");
}
</style><path class="lebkasbbf"/>`,
		"fallback": "material-symbols:send-time-extension-sharp",
	});
}

export default Component;
