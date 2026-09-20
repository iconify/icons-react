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
		"content": `<style>.h5svr64lo {
  fill: currentColor;
  d: path("M3 21V7h6V4h6v3h6v14zm1-1h16V8H4zm6-13h4V5h-4zM4 20V8zm7.5-5.5v3h1v-3h3v-1h-3v-3h-1v3h-3v1z");
}
</style><path class="h5svr64lo"/>`,
		"fallback": "material-symbols-light:medical-services-outline-sharp",
	});
}

export default Component;
