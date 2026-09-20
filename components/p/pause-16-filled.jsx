import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vizejttsk {
  fill: currentColor;
  d: path("M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 7 12.25v-8.5A1.75 1.75 0 0 0 5.25 2zm7 0A1.75 1.75 0 0 0 9 3.75v8.5c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 14 12.25v-8.5A1.75 1.75 0 0 0 12.25 2z");
}
</style><path class="vizejttsk"/>`,
		"fallback": "fluent:pause-16-filled",
	});
}

export default Component;
