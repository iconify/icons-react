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
		"content": `<style>.ju72-ipxf {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16zm-9 12h-2v-2h2zm0-4h-2V6h2z");
}
</style><path class="ju72-ipxf"/>`,
		"fallback": "ic:sharp-sms-failed",
	});
}

export default Component;
