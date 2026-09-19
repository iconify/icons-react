import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d9xqdltwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.273 11.506l9.965 19.734c3.271 6.478 1.466 11.26-6.086 11.26H7.275zm19.454 24.988L23.762 16.76C20.49 10.282 22.296 5.5 29.848 5.5h10.877z");
}
</style><path class="d9xqdltwn"/>`,
		"fallback": "arcticons:uba-mobile",
	});
}

export default Component;
