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
		"content": `<style>.p5z516bwf {
  fill: currentColor;
  d: path("M3.585 4.414L1.414 6.585a2 2 0 0 0 0 2.829l2.171 2.172a2 2 0 0 0 2.829 0l2.171-2.172a2 2 0 0 0 0-2.829L6.414 4.414a2 2 0 0 0-2.829 0m6 7.172l-.878-.88l.586-.585a3 3 0 0 0 0-4.243l-.586-.585l.878-.88a2 2 0 0 1 2.829 0l2.172 2.172a2 2 0 0 1 0 2.829l-2.172 2.172a2 2 0 0 1-2.829 0");
}
</style><path class="p5z516bwf"/>`,
		"fallback": "fluent:protocol-handler-16-filled",
	});
}

export default Component;
