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
		"content": `<style>.id5o-mpsb {
  fill: currentColor;
  d: path("M3.48 19V5h14v6.27l3.04-3.04v7.54l-3.04-3.04V19zm1-1h12V6h-12zm0 0V6zm1.655-2.27h8.692l-2.758-3.653l-2.454 3.077l-1.588-1.885z");
}
</style><path class="id5o-mpsb"/>`,
		"fallback": "material-symbols-light:video-camera-back-outline-sharp",
	});
}

export default Component;
