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
		"content": `<style>.rs2mvsbcp {
  fill: currentColor;
  d: path("M4.002 22.248a3.75 3.75 0 0 0 3.75 3.75h12.5a3.75 3.75 0 0 0 3.75-3.75V5.752a3.75 3.75 0 0 0-3.75-3.75h-12.5a3.75 3.75 0 0 0-3.75 3.75z");
}
</style><path class="rs2mvsbcp"/>`,
		"fallback": "fluent:rectangle-portrait-28-filled",
	});
}

export default Component;
