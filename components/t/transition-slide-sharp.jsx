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
		"content": `<style>.kx-4-jprb {
  fill: currentColor;
  d: path("M2 19V5h5.039v14zm7.423 0V5H22v14z");
}
</style><path class="kx-4-jprb"/>`,
		"fallback": "material-symbols-light:transition-slide-sharp",
	});
}

export default Component;
