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
		"content": `<style>.mvz2oew5s {
  fill: currentColor;
  d: path("M11.5 7.616v-3h-4v-1h9v1h-4v3zm-7 12.769v-7h1v1h4v-4h-1v-1h7v1h-1v4h4v-1h1v7h-1v-1h-13v1z");
}
</style><path class="mvz2oew5s"/>`,
		"fallback": "material-symbols-light:valve",
	});
}

export default Component;
