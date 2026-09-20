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
		"content": `<style>.flid9ubpn {
  fill: currentColor;
  d: path("M15.75 2c-.69 0-1.25.56-1.25 1.25V8H9.25C8.56 8 8 8.56 8 9.25v5.25H3.25c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h15.5A3.25 3.25 0 0 0 22 18.75V3.25C22 2.56 21.44 2 20.75 2z");
}
</style><path class="flid9ubpn"/>`,
		"fallback": "fluent:step-24-filled",
	});
}

export default Component;
