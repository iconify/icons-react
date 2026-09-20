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
		"content": `<style>.y0n3o4b_x {
  fill: currentColor;
  d: path("M3 19V5h18v14zm13.975-1l2.3-8.689L7.075 6l-2.3 8.63z");
}
</style><path class="y0n3o4b_x"/>`,
		"fallback": "material-symbols-light:video-stable-sharp",
	});
}

export default Component;
