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
		"content": `<style>.v5ead-bfp {
  fill: currentColor;
  d: path("M16 2a6 6 0 0 1 6 6v3.028a4.5 4.5 0 0 1 4 4.472v9a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 6 24.5v-9a4.5 4.5 0 0 1 4-4.472V8a6 6 0 0 1 6-6m-5.5 10A3.5 3.5 0 0 0 7 15.5v9a3.5 3.5 0 0 0 3.5 3.5h11a3.5 3.5 0 0 0 3.5-3.5v-9a3.5 3.5 0 0 0-3.5-3.5zm5.5 6.25a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5M16 3a5 5 0 0 0-5 5v3h10V8a5 5 0 0 0-5-5");
}
</style><path class="v5ead-bfp"/>`,
		"fallback": "fluent:lock-closed-32-light",
	});
}

export default Component;
