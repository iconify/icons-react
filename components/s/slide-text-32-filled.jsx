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
		"content": `<style>.d1now9b-o {
  fill: currentColor;
  d: path("M25.5 4A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5v-15A4.5 4.5 0 0 1 6.5 4zM9 20a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0-5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zm0-5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z");
}
</style><path class="d1now9b-o"/>`,
		"fallback": "fluent:slide-text-32-filled",
	});
}

export default Component;
