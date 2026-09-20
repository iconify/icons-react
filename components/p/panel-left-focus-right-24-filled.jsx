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
		"content": `<style>.me2to6bxo {
  fill: currentColor;
  d: path("M19.25 20A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4H4.75A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20zM8 5.5v13H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25z");
}
</style><path class="me2to6bxo"/>`,
		"fallback": "fluent:panel-left-focus-right-24-filled",
	});
}

export default Component;
