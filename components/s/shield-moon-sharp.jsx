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
		"content": `<style>.ckry9ww2q {
  fill: currentColor;
  d: path("M12.525 16q.95 0 1.863-.4t1.587-1.2q.175-.2.075-.45t-.35-.3q-.95-.15-1.8-.713t-1.375-1.487q-.5-.875-.587-1.887T12.2 7.6q.1-.25-.062-.45T11.7 7q-1.725.325-2.725 1.625t-1 2.875q0 1.875 1.338 3.188T12.525 16M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22");
}
</style><path class="ckry9ww2q"/>`,
		"fallback": "material-symbols:shield-moon-sharp",
	});
}

export default Component;
