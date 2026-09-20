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
		"content": `<style>.yifco8biv {
  fill: currentColor;
  d: path("M6.5 28A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5zm0-22A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26H20V6z");
}
</style><path class="yifco8biv"/>`,
		"fallback": "fluent:panel-right-32-filled",
	});
}

export default Component;
