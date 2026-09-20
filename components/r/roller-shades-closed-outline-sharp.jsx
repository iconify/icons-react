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
		"content": `<style>.prpu0wbqe {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2h-8.25q0 .725-.513 1.238T12 22.75t-1.237-.513T10.25 21zm4-6h12V5H6zm0 4h5v-2H6zm7 0h5v-2h-5zM6 5h12z");
}
</style><path class="prpu0wbqe"/>`,
		"fallback": "material-symbols:roller-shades-closed-outline-sharp",
	});
}

export default Component;
