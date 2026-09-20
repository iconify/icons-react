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
		"content": `<style>.ic-heh8qg {
  fill: currentColor;
  d: path("M4 19V7.98h16V19zm1-1h14V8.98H5zM4 6.596v-1h5.5V4h5v1.596H20v1zm8 6.885");
}
</style><path class="ic-heh8qg"/>`,
		"fallback": "material-symbols-light:stockpot-outline-sharp",
	});
}

export default Component;
