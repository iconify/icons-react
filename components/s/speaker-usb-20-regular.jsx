import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vs-7-8b6x {
  fill: currentColor;
  d: path("M10.316 2.273c.64-.594 1.68-.14 1.68.733v13.988c0 .873-1.04 1.326-1.68.733l-3.872-3.594a.5.5 0 0 0-.34-.133H3.496a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5h2.608a.5.5 0 0 0 .34-.134zm.68.733L7.124 6.599a1.5 1.5 0 0 1-1.02.4H3.496a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.608a1.5 1.5 0 0 1 1.02.401l3.872 3.594zM14 8V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 1 1v2.206a1 1 0 0 1-.191.588l-1.309 1.8V15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.406l-1.313-1.833A1 1 0 0 1 13 11.18V9a1 1 0 0 1 1-1m1 0h2V6h-2z");
}
</style><path class="vs-7-8b6x"/>`,
		"fallback": "fluent:speaker-usb-20-regular",
	});
}

export default Component;
