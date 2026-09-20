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
		"content": `<style>.u-a5b7bxo {
  fill: currentColor;
  d: path("M3 15a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zm3 11.5v-8h20v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 6 26.5m20-13v-8A3.5 3.5 0 0 0 22.5 2h-13A3.5 3.5 0 0 0 6 5.5v8z");
}
</style><path class="u-a5b7bxo"/>`,
		"fallback": "fluent:split-horizontal-32-filled",
	});
}

export default Component;
