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
		"content": `<style>.asdbeh1oc {
  fill: currentColor;
  d: path("M7 20V7H2V4h13v3h-5v13zm9 0v-8h-3V9h9v3h-3v8z");
}
</style><path class="asdbeh1oc"/>`,
		"fallback": "material-symbols:text-fields-outline-sharp",
	});
}

export default Component;
