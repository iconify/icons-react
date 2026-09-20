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
		"content": `<style>.p-c7fndrh {
  fill: currentColor;
  d: path("M14.395 3.902c.798-.748 2.105-.182 2.105.912v18.37c0 1.094-1.306 1.66-2.105.912L9.458 19.47a1.75 1.75 0 0 0-1.196-.473H5.25A3.25 3.25 0 0 1 2 15.747v-3.492a3.25 3.25 0 0 1 3.25-3.25h3.011c.445 0 .873-.17 1.197-.473zm5.958 4.4a.75.75 0 1 0-1.2.9A7.96 7.96 0 0 1 20.75 14c0 1.8-.594 3.46-1.597 4.797a.75.75 0 1 0 1.2.9A9.46 9.46 0 0 0 22.25 14a9.46 9.46 0 0 0-1.897-5.697");
}
</style><path class="p-c7fndrh"/>`,
		"fallback": "fluent:speaker-1-28-filled",
	});
}

export default Component;
