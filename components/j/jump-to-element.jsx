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
		"content": `<style>.kyhr49tie {
  fill: currentColor;
  d: path("M11.423 12.577v-3h1v2h2v1zm6.577 0v-1h2v-2h1v3zM11.423 6V3h3v1h-2v2zM20 6V4h-2V3h3v3zM3.708 21L3 20.292l6.715-6.715H4v-1h7.423V20h-1v-5.715z");
}
</style><path class="kyhr49tie"/>`,
		"fallback": "material-symbols-light:jump-to-element",
	});
}

export default Component;
