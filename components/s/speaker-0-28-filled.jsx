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
		"content": `<style>.xv2ijbl0p {
  fill: currentColor;
  d: path("M14.395 3.902c.798-.748 2.105-.182 2.105.912v18.37c0 1.094-1.306 1.66-2.105.912L9.458 19.47a1.75 1.75 0 0 0-1.196-.473H5.25A3.25 3.25 0 0 1 2 15.747v-3.492a3.25 3.25 0 0 1 3.25-3.25h3.011c.445 0 .873-.17 1.197-.473z");
}
</style><path class="xv2ijbl0p"/>`,
		"fallback": "fluent:speaker-0-28-filled",
	});
}

export default Component;
