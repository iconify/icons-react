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
		"content": `<style>.k08jmb_yn {
  fill: currentColor;
  d: path("M4 20V4h10.789L20 9.211V20zm3.5-4h9v-1h-9zm0-3.5h9v-1h-9zm0-3.5h5.73V8H7.5z");
}
</style><path class="k08jmb_yn"/>`,
		"fallback": "material-symbols-light:text-snippet-sharp",
	});
}

export default Component;
