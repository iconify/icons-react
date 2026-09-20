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
		"content": `<style>.z0i-oxbvw {
  fill: currentColor;
  d: path("M3 4V2h3v2zM2 22h9v-4H2.8zM6.125 9.325L4.7 7.925L6.825 5.8L8.25 7.2zM3.2 16H11v-4H4zM8.463 5.538Q7 4.074 7 2h10q0 2.075-1.463 3.538T12 7T8.463 5.537M11 11V8h2v3zm2 11h9l-.8-4H13zm0-6h7.8l-.8-4h-7zm4.875-6.675l-2.1-2.125l1.4-1.4L19.3 7.9zM18 4V2h3v2z");
}
</style><path class="z0i-oxbvw"/>`,
		"fallback": "material-symbols:solar-power-sharp",
	});
}

export default Component;
