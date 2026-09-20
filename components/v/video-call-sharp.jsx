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
		"content": `<style>.sctaskb6z {
  fill: currentColor;
  d: path("M9.98 15.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM3.48 19V5h14v6.27l3.04-3.04v7.54l-3.04-3.04V19z");
}
</style><path class="sctaskb6z"/>`,
		"fallback": "material-symbols-light:video-call-sharp",
	});
}

export default Component;
