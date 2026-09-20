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
		"content": `<style>.r9o4dbj0u {
  fill: currentColor;
  d: path("M30 23.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5zm-2-15A2.5 2.5 0 0 0 25.5 6H12v5h16zm0 4.5H12v13h13.5a2.5 2.5 0 0 0 2.5-2.5z");
}
</style><path class="r9o4dbj0u"/>`,
		"fallback": "fluent:panel-left-header-32-filled",
	});
}

export default Component;
