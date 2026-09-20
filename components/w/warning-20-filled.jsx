import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hthr2pdxj {
  fill: currentColor;
  d: path("M7.37 3.556c1.14-2.074 4.12-2.074 5.259 0l5.496 10.005c1.098 1.999-.35 4.444-2.63 4.444H4.504c-2.281 0-3.727-2.445-2.629-4.444zM10 12.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0-6.25a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V7a.5.5 0 0 0-.5-.5");
}
</style><path class="hthr2pdxj"/>`,
		"fallback": "fluent:warning-20-filled",
	});
}

export default Component;
