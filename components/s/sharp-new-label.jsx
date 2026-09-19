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
		"content": `<style>.bf-8_76gq {
  fill: currentColor;
  d: path("m21 12l-4.97 7H12v-6H9v-3H3V5h13.03zm-11 3H7v-3H5v3H2v2h3v3h2v-3h3z");
}
</style><path class="bf-8_76gq"/>`,
		"fallback": "ic:sharp-new-label",
	});
}

export default Component;
