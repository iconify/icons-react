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
		"content": `<style>.y3hfjsbje {
  fill: currentColor;
  d: path("M3 15a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zm5 11.5v-8H6v8A3.5 3.5 0 0 0 9.5 30h13a3.5 3.5 0 0 0 3.5-3.5v-8h-2v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 8 26.5m18-13v-8A3.5 3.5 0 0 0 22.5 2h-13A3.5 3.5 0 0 0 6 5.5v8h2v-8A1.5 1.5 0 0 1 9.5 4h13A1.5 1.5 0 0 1 24 5.5v8z");
}
</style><path class="y3hfjsbje"/>`,
		"fallback": "fluent:split-horizontal-32-regular",
	});
}

export default Component;
