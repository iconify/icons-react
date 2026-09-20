import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rd95lzs5x {
  fill: currentColor;
  d: path("M18.255 2.623a4.5 4.5 0 0 0-4.51 0l-9.5 5.5A4.5 4.5 0 0 0 2 12.019V22.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V12.018a4.5 4.5 0 0 0-2.245-3.894zm-3.508 1.731a2.5 2.5 0 0 1 2.506 0l9.5 5.5c.337.195.617.462.826.775L16 16.864L4.421 10.63c.21-.313.49-.58.826-.775zM4 12.674l11.526 6.207a1 1 0 0 0 .948 0L28 12.674V22.5a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5z");
}
</style><path class="rd95lzs5x"/>`,
		"fallback": "fluent:mail-read-32-regular",
	});
}

export default Component;
