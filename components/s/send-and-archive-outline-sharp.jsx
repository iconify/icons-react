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
		"content": `<style>.h1l_olq2i {
  fill: currentColor;
  d: path("m17 20l3-3l-.7-.7l-1.8 1.8V14h-1v4.1l-1.8-1.8l-.7.7zM3 20V4l14.3 6H17q-.875 0-1.65.2t-1.5.55L5 7v3.5l6 1.5l-6 1.5V17l5.4-2.3q-.2.575-.3 1.138T10 17v.05zm10.463.538Q12 19.075 12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463M5 14.7V7v10z");
}
</style><path class="h1l_olq2i"/>`,
		"fallback": "material-symbols:send-and-archive-outline-sharp",
	});
}

export default Component;
