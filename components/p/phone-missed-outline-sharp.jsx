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
		"content": `<style>.t00p0cc5b {
  fill: currentColor;
  d: path("M4.025 21L.4 17.475l1-1.025q2.125-2.275 4.938-3.362T12 12t5.638 1.1t4.962 3.35l1 1.025L19.975 21L16 18v-3.35q-.95-.3-1.95-.475T12 14t-2.05.175T8 14.65V18zM6 15.45q-.725.375-1.4.863T3.2 17.4l1 1L6 17zm12 .05V17l1.8 1.4l1-.95q-.725-.65-1.4-1.125T18 15.5m-6.05-4.15L7 6.4V9H5V3h6v2H8.4l3.525 3.525l5.65-5.65L19 4.3z");
}
</style><path class="t00p0cc5b"/>`,
		"fallback": "material-symbols:phone-missed-outline-sharp",
	});
}

export default Component;
