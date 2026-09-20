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
		"content": `<style>.ij9f0_xdj {
  fill: currentColor;
  d: path("M3.73 20.5h5V6.135l-2.5-2.5l-2.5 2.5zm5.77 0h5V6.135l-2.5-2.5l-2.5 2.5zm5.77 0h5V6.135l-2.5-2.5l-2.5 2.5z");
}
</style><path class="ij9f0_xdj"/>`,
		"fallback": "material-symbols-light:outdoor-garden-sharp",
	});
}

export default Component;
