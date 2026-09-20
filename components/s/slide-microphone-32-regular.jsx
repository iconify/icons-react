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
		"content": `<style>.xw95pzbdx {
  fill: currentColor;
  d: path("M29.5 21a1 1 0 0 1 1 1a6.5 6.5 0 0 1-5.5 6.423V29.5a1 1 0 1 1-2 0v-1.077A6.5 6.5 0 0 1 17.5 22a1 1 0 1 1 2 0a4.5 4.5 0 1 0 9 0a1 1 0 0 1 1-1m-4-17A4.5 4.5 0 0 1 30 8.5v11.05a2.5 2.5 0 0 0-1.5.159V18.5a4.5 4.5 0 0 0-.5-2.061V8.5A2.5 2.5 0 0 0 25.5 6h-19A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26h10.572a8 8 0 0 0 1.64 2H6.5A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4zM24 15.5a3 3 0 0 1 3 3V22a3 3 0 1 1-6 0v-3.5a3 3 0 0 1 3-3M15 20a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm3-5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm-2-5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z");
}
</style><path class="xw95pzbdx"/>`,
		"fallback": "fluent:slide-microphone-32-regular",
	});
}

export default Component;
