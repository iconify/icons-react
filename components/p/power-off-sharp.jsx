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
		"content": `<style>.gcx_2vd7l {
  fill: currentColor;
  d: path("M9.5 21v-3L6 14.5V7.075h1.075v2.8L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4l-4.95-4.95l-.35.35v3zm7.65-6.7L8 5.15V3h2v4h4V3h2v4h2v6.45z");
}
</style><path class="gcx_2vd7l"/>`,
		"fallback": "material-symbols:power-off-sharp",
	});
}

export default Component;
