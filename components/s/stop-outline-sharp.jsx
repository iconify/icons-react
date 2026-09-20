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
		"content": `<style>.d8j82fe9x {
  fill: currentColor;
  d: path("M8 8v8zm-1 9V7h10v10zm1-1h8V8H8z");
}
</style><path class="d8j82fe9x"/>`,
		"fallback": "material-symbols-light:stop-outline-sharp",
	});
}

export default Component;
