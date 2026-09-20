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
		"content": `<style>.tad0vib8r {
  fill: currentColor;
  d: path("M4 19V7.98h16V19zM4 6.596v-1h5.5V4h5v1.596H20v1z");
}
</style><path class="tad0vib8r"/>`,
		"fallback": "material-symbols-light:stockpot-sharp",
	});
}

export default Component;
