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
		"content": `<style>.cov94mruv {
  fill: currentColor;
  d: path("M18.925 16.075L17.5 14.65l2-2.65L15 6H8.85l-2-2H16l6 8zM4 18h11.2L4 6.8zm16.5 5.3L17.2 20H2V4.8L.7 3.5l1.4-1.4l19.8 19.8zM9.6 12.4");
}
</style><path class="cov94mruv"/>`,
		"fallback": "material-symbols:label-off-outline-sharp",
	});
}

export default Component;
