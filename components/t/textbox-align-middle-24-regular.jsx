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
		"content": `<style>.fxq0zpbng {
  fill: currentColor;
  d: path("M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3zM4.5 5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v12.5c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25zM7.25 9a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="fxq0zpbng"/>`,
		"fallback": "fluent:textbox-align-middle-24-regular",
	});
}

export default Component;
