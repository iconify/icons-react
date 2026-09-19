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
		"content": `<style>.pxf0ptb-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 30.98h7c3.709 0 7-3.087 7-7c0-3.801-3.05-7-7-7c-3.75 0-7 3.017-7 7zc0 5.815-4.646 11.525-11.5 11.54V23.98c0-10.423 8.386-18.5 18.5-18.5c11.262 0 18.5 9.308 18.5 18.5c0 9.292-7.526 18.5-18.5 18.5l-18.5.04");
}
</style><path class="pxf0ptb-n"/>`,
		"fallback": "arcticons:microsoft-loop",
	});
}

export default Component;
