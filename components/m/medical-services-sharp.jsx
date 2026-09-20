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
		"content": `<style>.aqt4zjz3r {
  fill: currentColor;
  d: path("M3 21V7h6V4h6v3h6v14zm7-14h4V5h-4zm1.5 7.5v3h1v-3h3v-1h-3v-3h-1v3h-3v1z");
}
</style><path class="aqt4zjz3r"/>`,
		"fallback": "material-symbols-light:medical-services-sharp",
	});
}

export default Component;
