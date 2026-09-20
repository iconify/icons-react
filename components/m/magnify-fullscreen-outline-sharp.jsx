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
		"content": `<style>.yd-i-ywcu {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm0 0V6zm10-4h2v-2h2v-2h-2V8h-2v2h-2v2h2z");
}
</style><path class="yd-i-ywcu"/>`,
		"fallback": "material-symbols:magnify-fullscreen-outline-sharp",
	});
}

export default Component;
