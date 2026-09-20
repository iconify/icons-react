import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tka8y5fws {
  fill: currentColor;
  d: path("M3 5.75A2.75 2.75 0 0 1 5.75 3h16.5A2.75 2.75 0 0 1 25 5.75v4a2.75 2.75 0 0 1-2.75 2.75H8.5v4.75a2.25 2.25 0 0 0 2.25 2.25H14v-1.25a2.75 2.75 0 0 1 2.75-2.75h5.5A2.75 2.75 0 0 1 25 18.25v4A2.75 2.75 0 0 1 22.25 25h-5.5A2.75 2.75 0 0 1 14 22.25V21h-3.25A3.75 3.75 0 0 1 7 17.25V12.5H5.75A2.75 2.75 0 0 1 3 9.75z");
}
</style><path class="tka8y5fws"/>`,
		"fallback": "fluent:row-child-28-filled",
	});
}

export default Component;
