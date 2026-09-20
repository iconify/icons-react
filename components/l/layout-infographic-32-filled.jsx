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
		"content": `<style>.v-4730rbm {
  fill: currentColor;
  d: path("M24.5 3A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3zm-13 12a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m7.5 1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m4-2a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1m-11.5 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-3-8a1 1 0 0 0 0 2h15a1 1 0 1 0 0-2z");
}
</style><path class="v-4730rbm"/>`,
		"fallback": "fluent:layout-infographic-32-filled",
	});
}

export default Component;
